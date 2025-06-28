
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Layout = () => {
  return (
    <div className="min-h-screen bg-makassar-cream batik-bg">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
