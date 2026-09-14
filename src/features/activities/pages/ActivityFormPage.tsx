import { Plus, Trash2 } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ActivityDraft, AreaType } from '../../../types/taskflow';
import { useActivityStore } from '../stores/activityStore';

const defaultStage = { title: 'Preparacion', subtasks: [''] };

export function ActivityFormPage() {
  const navigate = useNavigate();
  const createActivity = useActivityStore((state) => state.createActivity);
  const [draft, setDraft] = useState<ActivityDraft>({ title: '', description: '', area: 'work', type: 'feature', projectName: '', courseName: '', personalCategory: '', priority: 'medium', dueDate: '', stages: [defaultStage] });

  function updateStage(index: number, title: string) { setDraft((current) => ({ ...current, stages: current.stages.map((stage, stageIndex) => stageIndex === index ? { ...stage, title } : stage) })); }
  function updateSubtask(stageIndex: number, subtaskIndex: number, title: string) { setDraft((current) => ({ ...current, stages: current.stages.map((stage, index) => index === stageIndex ? { ...stage, subtasks: stage.subtasks.map((item, itemIndex) => itemIndex === subtaskIndex ? title : item) } : stage) })); }
  function addStage() { setDraft((current) => ({ ...current, stages: [...current.stages, { title: '', subtasks: [''] }] })); }
  function addSubtask(stageIndex: number) { setDraft((current) => ({ ...current, stages: current.stages.map((stage, index) => index === stageIndex ? { ...stage, subtasks: [...stage.subtasks, ''] } : stage) })); }
  function removeStage(stageIndex: number) { setDraft((current) => ({ ...current, stages: current.stages.filter((_, index) => index !== stageIndex) })); }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!draft.title.trim()) return;
    const activityId = await createActivity({ ...draft, stages: draft.stages.map((stage) => ({ ...stage, subtasks: stage.subtasks.filter(Boolean) })).filter((stage) => stage.title.trim()) });
    navigate(`/activities/${activityId}`);
  }

  return (
    <form className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-8 lg:py-8" onSubmit={handleSubmit}>
      <header><p className="text-sm font-medium text-teal-700">Nueva actividad</p><h1 className="mt-1 text-2xl font-semibold text-slate-950 sm:text-3xl">Crear guia de trabajo</h1></header>
      <section className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-2">
        <label className="md:col-span-2"><span className="text-sm font-medium">Titulo</span><input required className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.title} onChange={(event) => setDraft({ ...draft, title: event.target.value })} /></label>
        <label><span className="text-sm font-medium">Area</span><select className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.area} onChange={(event) => setDraft({ ...draft, area: event.target.value as AreaType })}><option value="work">Trabajo</option><option value="university">Universidad</option><option value="personal">Personal</option></select></label>
        <label><span className="text-sm font-medium">Prioridad</span><select className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.priority} onChange={(event) => setDraft({ ...draft, priority: event.target.value as ActivityDraft['priority'] })}><option value="low">Baja</option><option value="medium">Media</option><option value="high">Alta</option><option value="urgent">Urgente</option></select></label>
        <label><span className="text-sm font-medium">Tipo</span><input className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.type} onChange={(event) => setDraft({ ...draft, type: event.target.value as ActivityDraft['type'] })} /></label>
        <label><span className="text-sm font-medium">Fecha</span><input className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" type="date" value={draft.dueDate} onChange={(event) => setDraft({ ...draft, dueDate: event.target.value })} /></label>
        {draft.area === 'work' ? <label><span className="text-sm font-medium">Proyecto</span><input className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.projectName} onChange={(event) => setDraft({ ...draft, projectName: event.target.value })} /></label> : null}
        {draft.area === 'university' ? <label><span className="text-sm font-medium">Curso</span><input className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.courseName} onChange={(event) => setDraft({ ...draft, courseName: event.target.value })} /></label> : null}
        {draft.area === 'personal' ? <label><span className="text-sm font-medium">Categoria</span><input className="mt-1 h-10 w-full rounded-md border border-slate-200 px-3 text-sm" value={draft.personalCategory} onChange={(event) => setDraft({ ...draft, personalCategory: event.target.value })} /></label> : null}
        <label className="md:col-span-2"><span className="text-sm font-medium">Descripcion</span><textarea className="mt-1 min-h-24 w-full rounded-md border border-slate-200 px-3 py-2 text-sm" value={draft.description} onChange={(event) => setDraft({ ...draft, description: event.target.value })} /></label>
      </section>
      <section className="space-y-3">
        <div className="flex items-center justify-between"><h2 className="font-semibold">Etapas y subtareas</h2><button className="inline-flex h-9 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm font-medium" type="button" onClick={addStage}><Plus size={16} />Etapa</button></div>
        {draft.stages.map((stage, stageIndex) => <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={stageIndex}><div className="flex gap-2"><input className="h-10 flex-1 rounded-md border border-slate-200 px-3 text-sm font-medium" placeholder="Nombre de etapa" value={stage.title} onChange={(event) => updateStage(stageIndex, event.target.value)} /><button className="h-10 w-10 rounded-md border border-slate-200 text-slate-500" type="button" onClick={() => removeStage(stageIndex)}><Trash2 className="mx-auto" size={16} /></button></div><div className="mt-3 space-y-2">{stage.subtasks.map((subtask, subtaskIndex) => <input className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm" key={subtaskIndex} placeholder="Subtarea" value={subtask} onChange={(event) => updateSubtask(stageIndex, subtaskIndex, event.target.value)} />)}<button className="text-sm font-medium text-teal-700" type="button" onClick={() => addSubtask(stageIndex)}>Agregar subtarea</button></div></article>)}
      </section>
      <div className="flex justify-end"><button className="h-11 rounded-md bg-teal-700 px-5 text-sm font-semibold text-white" type="submit">Crear actividad</button></div>
    </form>
  );
}
