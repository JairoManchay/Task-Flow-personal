import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  eyebrow: string;
  description: string;
  primaryAction?: { label: string; to: string };
}

export function PlaceholderPage({ title, eyebrow, description, primaryAction }: PlaceholderPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-teal-700">{eyebrow}</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950 sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
        {primaryAction ? (
          <Link className="inline-flex h-10 items-center justify-center rounded-md bg-teal-700 px-4 text-sm font-semibold text-white shadow-sm" to={primaryAction.to}>
            {primaryAction.label}
          </Link>
        ) : null}
      </header>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-medium text-slate-700">Esta pantalla ya esta conectada.</p>
        <p className="mt-2 text-sm text-slate-500">En la siguiente fase iremos reemplazando este contenido por funcionalidad real con datos locales.</p>
      </section>
    </div>
  );
}
