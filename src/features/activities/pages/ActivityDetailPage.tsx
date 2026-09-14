import { useParams } from 'react-router-dom';
import { PlaceholderPage } from '../../../components/layout/PlaceholderPage';

export function ActivityDetailPage() {
  const { activityId } = useParams();

  return <PlaceholderPage eyebrow="Detalle" title="Actividad seleccionada" description={`Ruta activa para la actividad: ${activityId ?? 'sin identificador'}. Aqui ira el checklist con pestanas, progreso y doble check.`} primaryAction={{ label: 'Volver a actividades', to: '/activities' }} />;
}
