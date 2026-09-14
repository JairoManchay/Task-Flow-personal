interface ProgressBarProps { completed: number; total: number; percentage: number; }
export function ProgressBar({ completed, total, percentage }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-teal-600" style={{ width: `${percentage}%` }} />
      </div>
      <span className="w-20 text-right text-sm font-medium text-slate-600">{completed}/{total} - {percentage}%</span>
    </div>
  );
}
