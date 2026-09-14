import { AlertTriangle, ArrowRight, CalendarClock, ClipboardCheck, ListTodo, Plus, Search } from 'lucide-react';

const summary = [
  { label: 'Pendientes', value: 4, tone: 'bg-amber-50 text-amber-700 border-amber-200' },
  { label: 'En proceso', value: 2, tone: 'bg-sky-50 text-sky-700 border-sky-200' },
  { label: 'Por revisar', value: 1, tone: 'bg-violet-50 text-violet-700 border-violet-200' },
  { label: 'Completadas', value: 8, tone: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
];

const todayActivities = [
  { title: 'Implementar endpoint de pagos', area: 'Trabajo', progress: '4/8', percent: 50, priority: 'Alta' },
  { title: 'PC de Inmunologia', area: 'Universidad', progress: '3/6', percent: 50, priority: 'Urgente' },
  { title: 'Gimnasio', area: 'Personal', progress: '0/3', percent: 0, priority: 'Media' }
];

export function DashboardPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-teal-700">Buenos dias, Jairo</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-normal text-slate-950 sm:text-3xl">Tus actividades de hoy</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 shadow-sm" type="button" title="Buscar">
            <Search size={18} />
          </button>
          <button className="flex h-10 items-center gap-2 rounded-md bg-teal-700 px-4 text-sm font-semibold text-white shadow-sm" type="button">
            <Plus size={18} />
            Nueva
          </button>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((item) => (
          <article className={`rounded-lg border p-4 ${item.tone}`} key={item.label}>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold">{item.value}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-950">Hoy</h2>
            <button className="flex items-center gap-1 text-sm font-medium text-teal-700" type="button">
              Ver todo
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {todayActivities.map((activity) => (
              <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={activity.title}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-slate-950">{activity.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{activity.area}</p>
                  </div>
                  <span className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-600">{activity.priority}</span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-teal-600" style={{ width: `${activity.percent}%` }} />
                  </div>
                  <span className="w-16 text-right text-sm font-medium text-slate-600">{activity.progress}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <CalendarClock className="text-teal-700" size={18} />
              <h2 className="text-base font-semibold">Esta semana</h2>
            </div>
            <div className="space-y-3 text-sm">
              <p className="flex justify-between gap-4"><span>Mie 16</span><strong>Endpoint de pagos</strong></p>
              <p className="flex justify-between gap-4"><span>Jue 17</span><strong>Exposicion</strong></p>
              <p className="flex justify-between gap-4"><span>Vie 18</span><strong>Pago servicios</strong></p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="text-amber-600" size={18} />
              <h2 className="text-base font-semibold">Proximamente</h2>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <p>Examen parcial de Inmunologia</p>
              <p>Deadline laboral del sprint</p>
              <p>Entrega de informe</p>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <ClipboardCheck className="text-emerald-700" size={18} />
              <h2 className="text-base font-semibold">Por revisar</h2>
            </div>
            <p className="text-sm text-slate-600">1 actividad espera doble check antes de finalizar.</p>
          </section>
        </aside>
      </section>

      <button className="fixed bottom-20 right-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-700 text-white shadow-lg lg:hidden" type="button" title="Nueva actividad">
        <ListTodo size={22} />
      </button>
    </div>
  );
}
