import * as XLSX from 'xlsx';
import type { TaskFlowBackup } from '../types/taskflow';
import type { TaskFlowData } from '../repositories/taskFlowRepository';

export function buildBackup(data: TaskFlowData): TaskFlowBackup {
  return { appName: 'TaskFlow', schemaVersion: 1, exportedAt: new Date().toISOString(), data: { ...data, resourceLinks: [], settings: [] } };
}

export function downloadJson(filename: string, data: unknown) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function exportActivitiesExcel(data: TaskFlowData) {
  const rows = data.activities.map((activity) => ({ titulo: activity.title, area: activity.area, estado: activity.status, prioridad: activity.priority, fecha: activity.dueDate ?? '', completada: activity.completedAt ?? '' }));
  const sheet = XLSX.utils.json_to_sheet(rows);
  const book = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(book, sheet, 'Actividades');
  XLSX.writeFile(book, 'taskflow-actividades.xlsx');
}
