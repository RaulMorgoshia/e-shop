'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PublicRouteProps {
  children: React.ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');

      if (token) {
        // If the token exists, redirect to the dashboard (or another page)
        router.push('/');
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default PublicRoute;
