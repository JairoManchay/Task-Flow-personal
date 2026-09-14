import { PlaceholderPage } from '../../../components/layout/PlaceholderPage';

export function ActivitiesPage() {
  return <PlaceholderPage eyebrow="Actividades" title="Todas las actividades" description="Aqui se listaran tus actividades por estado, prioridad, area y fecha." primaryAction={{ label: 'Nueva actividad', to: '/activities/new' }} />;
}
