import type { ActivityPriority, ActivityStatus, AreaType } from '../types/taskflow';

export const areaLabels: Record<AreaType, string> = { university: 'Universidad', work: 'Trabajo', personal: 'Personal' };
export const statusLabels: Record<ActivityStatus, string> = { pending: 'Pendiente', in_progress: 'En proceso', review: 'Por revisar', completed: 'Finalizada', archived: 'Archivada' };
export const priorityLabels: Record<ActivityPriority, string> = { low: 'Baja', medium: 'Media', high: 'Alta', urgent: 'Urgente' };

export function formatDate(value?: string) {
  if (!value) return 'Sin fecha';
  return new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T00:00:00`));
}

export function isToday(value?: string) {
  if (!value) return false;
  return value === new Date().toISOString().slice(0, 10);
}

export function isWithinNextDays(value: string | undefined, days: number) {
  if (!value) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(`${value}T00:00:00`);
  const diff = target.getTime() - today.getTime();
  return diff >= 0 && diff <= days * 24 * 60 * 60 * 1000;
}
