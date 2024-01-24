import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Rejet from './Reset mdp/Rejet.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Hotels from './Pages/Hotels.jsx';
import PageInscription from './Inscription/PageInscription.jsx';
import PageConnexion from './Connexion/PageConnexion.jsx';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/connexion" />,
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "hotels",
        element: <Hotels />,
      },
    ],
  },
  {
    path: "/connexion",
    element: <PageConnexion />,
  },
  {
    path: "/inscription",
    element: <PageInscription />,
  },
  {
    path: "/rejet",
    element: <Rejet />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
    </RouterProvider>
  </React.StrictMode>,
)
