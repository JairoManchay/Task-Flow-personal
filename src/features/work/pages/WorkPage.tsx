import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmDialog } from '../../../components/common/ConfirmDialog';
import { ProgressBar } from '../../../components/common/ProgressBar';
import type { Activity, Project } from '../../../types/taskflow';
import { useActivityStore } from '../../activities/stores/activityStore';

type DeleteTarget =
  | { type: 'activity'; activity: Activity }
  | { type: 'project'; project: Project; taskCount: number }
  | null;

export function WorkPage() {
  const { projects, activities, getProgress, deleteActivity, deleteProject } = useActivityStore();
  const [deleteTarget, setDeleteTarget] = useState<DeleteTarget>(null);

  async function confirmDelete() {
    if (!deleteTarget) return;

    if (deleteTarget.type === 'activity') {
      await deleteActivity(deleteTarget.activity.id);
      setDeleteTarget(null);
      return;
    }

    if (deleteTarget.taskCount > 0) return;
    await deleteProject(deleteTarget.project.id);
    setDeleteTarget(null);
  }

  const dialogTitle = deleteTarget?.type === 'activity' ? 'Eliminar tarea' : 'Eliminar proyecto';
  const dialogDescription =
    deleteTarget?.type === 'activity'
      ? `Se eliminara "${deleteTarget.activity.title}" junto con sus etapas, subtareas, notas e historial.`
      : deleteTarget?.taskCount
        ? 'Primero elimina las tareas asociadas. Asi evitamos borrar trabajo importante por accidente.'
        : `Se eliminara el proyecto "${deleteTarget?.project.name}".`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <header className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-teal-700">Trabajo</p>
          <h1 className="text-2xl font-semibold">Proyectos</h1>
        </div>
        <Link className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white" to="/activities/new">Nueva tarea</Link>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
          const projectActivities = activities.filter((activity) => activity.projectId === project.id);
          const inProgress = projectActivities.filter((activity) => activity.status === 'in_progress').length;

          return (
            <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={project.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold">{project.name}</h2>
                  <p className="mt-1 text-sm text-slate-500">{projectActivities.length} tareas - {inProgress} en proceso</p>
                </div>
                <button className="rounded-md border border-red-200 p-2 text-red-600" onClick={() => setDeleteTarget({ type: 'project', project, taskCount: projectActivities.length })} title="Eliminar proyecto">
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="mt-4 space-y-2">
                {projectActivities.map((activity) => {
                  const progress = getProgress(activity.id);
                  return (
                    <div className="rounded-md bg-slate-50 p-3 text-sm" key={activity.id}>
                      <div className="flex items-start justify-between gap-3">
                        <Link className="font-semibold text-slate-950 hover:text-teal-700" to={`/activities/${activity.id}`}>{activity.title}</Link>
                        <button className="rounded-md border border-red-200 p-1 text-red-600" onClick={() => setDeleteTarget({ type: 'activity', activity })} title="Eliminar tarea">
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <div className="mt-2"><ProgressBar completed={progress.completedSubtasks} total={progress.totalSubtasks} percentage={progress.percentage} /></div>
                    </div>
                  );
                })}
                {projectActivities.length === 0 ? <p className="rounded-md border border-dashed border-slate-300 p-3 text-sm text-slate-500">Falta construir tu primera Tarea</p> : null}
              </div>
            </article>
          );
        })}
        {projects.length === 0 ? <p className="text-sm text-slate-500">Falta construir tu primera Tarea</p> : null}
      </section>

      <ConfirmDialog
        confirmLabel={deleteTarget?.type === 'project' && deleteTarget.taskCount > 0 ? 'Entendido' : 'Eliminar'}
        description={dialogDescription}
        isOpen={deleteTarget !== null}
        onCancel={() => setDeleteTarget(null)}
        onConfirm={deleteTarget?.type === 'project' && deleteTarget.taskCount > 0 ? () => setDeleteTarget(null) : confirmDelete}
        title={dialogTitle}
      />
    </div>
  );
}
