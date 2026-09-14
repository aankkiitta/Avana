import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="app-layout" style={{ margin: 0, padding: 0 }}>
      <Header />
      <main style={{ margin: 0, padding: 0, display: 'block' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;