import type { ActivityPriority, ActivityStatus, AreaType } from '../../types/taskflow';
import { areaLabels, priorityLabels, statusLabels } from '../../utils/format';

const statusTone: Record<ActivityStatus, string> = { pending: 'border-amber-200 bg-amber-50 text-amber-700', in_progress: 'border-sky-200 bg-sky-50 text-sky-700', review: 'border-violet-200 bg-violet-50 text-violet-700', completed: 'border-emerald-200 bg-emerald-50 text-emerald-700', archived: 'border-slate-200 bg-slate-100 text-slate-600' };
const priorityTone: Record<ActivityPriority, string> = { low: 'border-slate-200 text-slate-600', medium: 'border-teal-200 text-teal-700', high: 'border-orange-200 text-orange-700', urgent: 'border-red-200 text-red-700' };
const areaTone: Record<AreaType, string> = { university: 'border-indigo-200 text-indigo-700', work: 'border-cyan-200 text-cyan-700', personal: 'border-emerald-200 text-emerald-700' };

export function StatusBadge({ status }: { status: ActivityStatus }) { return <span className={`rounded-md border px-2 py-1 text-xs font-medium ${statusTone[status]}`}>{statusLabels[status]}</span>; }
export function PriorityBadge({ priority }: { priority: ActivityPriority }) { return <span className={`rounded-md border bg-white px-2 py-1 text-xs font-medium ${priorityTone[priority]}`}>{priorityLabels[priority]}</span>; }
export function AreaBadge({ area }: { area: AreaType }) { return <span className={`rounded-md border bg-white px-2 py-1 text-xs font-medium ${areaTone[area]}`}>{areaLabels[area]}</span>; }
