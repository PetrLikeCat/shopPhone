import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '..//components/Header';
import { Footer } from '../components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div>
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
    <Footer />
    </div>  
    </div>
    </div>
  );
};

export default MainLayout;
