import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove authentication from localStorage
    localStorage.removeItem('isAuthenticated');
    navigate('/admin/login');
  };

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/25bdcf69-d62d-4efc-ad1d-8d3e548f3a6f/cad444ffe05c9010dbe9d3e29817723c.png"
              alt="Miss Scholastic America"
              className="h-10 w-auto mr-4"
            />
            <h1 className="text-xl font-serif font-bold text-primary">Admin Dashboard</h1>
          </div>
          <Button onClick={handleLogout} variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar; 