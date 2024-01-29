import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import DashboardCard from '../components/DashboardCard';

function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    // Vérifiez si l'utilisateur est déjà connecté
    const user = localStorage.getItem("userName");
      // Si l'utilisateur est connecté, redirigez-le vers le tableau de bord approprié
      if (!user) {
        navigate("/connexion");
      }
  }, [navigate]);
  
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