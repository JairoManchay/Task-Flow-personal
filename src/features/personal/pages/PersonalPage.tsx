import { Link } from 'react-router-dom';
import { AreaBadge, PriorityBadge, StatusBadge } from '../../../components/common/Badges';
import { useActivityStore } from '../../activities/stores/activityStore';

export function PersonalPage() {
  const { activities } = useActivityStore();
  const personal = activities.filter((activity) => activity.area === 'personal');
  return <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"><header className="mb-5 flex items-center justify-between"><div><p className="text-sm font-medium text-teal-700">Personal</p><h1 className="text-2xl font-semibold">Vida personal</h1></div><Link className="rounded-md bg-teal-700 px-4 py-2 text-sm font-semibold text-white" to="/activities/new">Nueva actividad</Link></header><section className="space-y-3">{personal.map((activity) => <Link className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={activity.id} to={`/activities/${activity.id}`}><h2 className="font-semibold">{activity.title}</h2><div className="mt-3 flex flex-wrap gap-2"><AreaBadge area={activity.area} /><PriorityBadge priority={activity.priority} /><StatusBadge status={activity.status} /></div></Link>)}</section></div>;
}
