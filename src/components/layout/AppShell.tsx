import { CalendarDays, CheckCircle2, Home, Settings, UserRound, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import type { ReactNode } from 'react';

const navigationItems = [
  { label: 'Inicio', icon: Home },
  { label: 'Universidad', icon: GraduationCap },
  { label: 'Trabajo', icon: BriefcaseBusiness },
  { label: 'Personal', icon: UserRound },
  { label: 'Calendario', icon: CalendarDays },
  { label: 'Ajustes', icon: Settings }
];

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-4 py-5 lg:block">
        <div className="mb-8 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-white">
            <CheckCircle2 size={22} />
          </div>
          <div>
            <p className="text-lg font-semibold">TaskFlow</p>
            <p className="text-xs text-slate-500">Guia de trabajo personal</p>
          </div>
        </div>
        <nav className="space-y-1">
          {navigationItems.map((item) => (
            <button
              className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              key={item.label}
              type="button"
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="pb-20 lg:ml-64 lg:pb-0">{children}</main>

      <nav className="fixed inset-x-0 bottom-0 grid grid-cols-5 border-t border-slate-200 bg-white px-2 py-2 shadow-sm lg:hidden">
        {navigationItems.slice(0, 5).map((item) => (
          <button className="flex flex-col items-center gap-1 rounded-md py-1 text-xs text-slate-600" key={item.label} type="button">
            <item.icon size={19} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
