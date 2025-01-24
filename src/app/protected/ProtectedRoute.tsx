'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        // თუ ტოკენი არ არსებობს, გადამისამართება ლოგინის გვერდზე
        router.push('/pages/user/login');
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // ვალიდაციის დროს ვაჩვენებთ ჩატვირთვის სტატუსს
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Validating authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
