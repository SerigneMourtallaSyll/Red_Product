import React from 'react'
import { Link } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard';

function Dashboard() {
  return (
      <div className="dashboard">
        <div className="titleDashboard px-4 py-1">
          <h6>Bienvenue sur RED Product</h6>
          <p className='m-0 p-0'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
        <div className="dashboardCard">
          <DashboardCard />          
        </div>
      </div>
  );
}

export default Dashboard