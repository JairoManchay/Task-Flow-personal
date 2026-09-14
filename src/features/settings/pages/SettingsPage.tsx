import { Download, FileSpreadsheet } from 'lucide-react';
import { buildBackup, downloadJson, exportActivitiesExcel } from '../../../services/backupService';
import { useActivityStore } from '../../activities/stores/activityStore';

export function SettingsPage() {
  const data = useActivityStore();
  const backup = buildBackup(data);
  return <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8"><header className="mb-5"><p className="text-sm font-medium text-teal-700">Ajustes</p><h1 className="text-2xl font-semibold">Configuracion y respaldos</h1></header><section className="grid gap-3 md:grid-cols-2"><button className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm" onClick={() => downloadJson('taskflow-backup.json', backup)}><Download className="text-teal-700" /><span><strong>Crear backup JSON</strong><br /><small className="text-slate-500">Exporta actividades, cursos, proyectos, notas e historial.</small></span></button><button className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm" onClick={() => exportActivitiesExcel(data)}><FileSpreadsheet className="text-emerald-700" /><span><strong>Exportar Excel</strong><br /><small className="text-slate-500">Genera un Excel simple de actividades.</small></span></button></section><p className="mt-4 text-sm text-amber-700">Importar backup queda preparado para una siguiente mejora con validacion previa y confirmacion, para evitar sobreescribir datos por accidente.</p></div>;
}
