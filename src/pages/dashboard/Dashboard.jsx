import { Outlet } from 'react-router-dom';
import Aside from '../../components/ui/Aside/Aside';
import './dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Aside />

      <section className="section">
        <Outlet />
      </section>
    </main>
  );
};
export default Dashboard;
