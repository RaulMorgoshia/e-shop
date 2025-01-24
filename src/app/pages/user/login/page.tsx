'use client'; // Next.js-სთვის, რომ ეს არის კლაიენტის კომპონენტი

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginApi } from '../../../services/login.service';

// ავტორიზაციის გვერდი
const LoginPage = () => {
  // State-ების შექმნა მომხმარებლის მონაცემების, სტატუსისა და შეცდომებისათვის
  const [email, setEmail] = useState(''); // იმეილის ველი
  const [password, setPassword] = useState(''); // პაროლის ველი
  const [error, setError] = useState<string | null>(null); // შეცდომების შეტყობინება
  const [loading, setLoading] = useState(false); // ჩატვირთვის სტატუსი
  const router = useRouter(); // გვერდის გადამისამართების ფუნქცია

  // ფორმის გაგზავნის დამუშავების ფუნქცია
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ფორმის სტანდარტული გაგზავნის თავიდან აცილება
    setLoading(true); // ჩატვირთვის დაწყების ჩვენება
    setError(null); // შეცდომის გასუფთავება

    try {
      // API-ის მოწოდება მომხმარებლის ავტორიზაციისთვის
      const data = await loginApi(email, password);

      if (data.status === 'success') {
        // ტოკენის შენახვა localStorage-ში
        localStorage.setItem('authToken', data.token);
        

        // Custom Event -ის გაგზავნა, მაგალითად, სხვა კომპონენტებში რეაგირებისთვის
        window.dispatchEvent(new Event('authChange'));

        // წარმატებული ავტორიზაციის შემდეგ გადამისამართება
        router.push('/pages/main');
      } else {
        setError('ავტორიზაცია ვერ მოხერხდა'); // შეცდომის შეტყობინება
      }
    } catch (err: unknown) {
      // შეცდომის დამუშავება
      setError(err instanceof Error ? err.message : 'უცნობი შეცდომა მოხდა');
    } finally {
      setLoading(false); // ჩატვირთვის დასრულების ჩვენება
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">ავტორიზაცია</h1>
        <form onSubmit={handleSubmit}>
          {/* იმეილის ველი */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">იმეილი:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* პაროლის ველი */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">პაროლი:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ავტორიზაციის ღილაკი */}
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? 'შესვლა მიმდინარეობს...' : 'შესვლა'}
          </button>

          {/* შეცდომის შეტყობინება */}
          {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
