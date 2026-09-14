import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { useActivityStore } from '../features/activities/stores/activityStore';

export function App() {
  const load = useActivityStore((state) => state.load);
  useEffect(() => { void load(); }, [load]);

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
