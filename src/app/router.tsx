import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      }
    ]
  }
]);
