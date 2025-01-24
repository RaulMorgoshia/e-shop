'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SuccessPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateToMain();
    }, 5000);

    return () => clearTimeout(timer); // ტაიმერის გაწმენდა კომპონენტის გაშლამდე
  }, []);

  const navigateToMain = () => {
    router.push('/pages/main'); // გადადის მეინ გვერდზე
    setTimeout(() => {
      window.location.reload(); // გვერდის განახლება
    }, 100); // ვადა მცირე დროით, რათა გვერდი ჩაიტვირთოს
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          ავტორიზაცია წარმატებით დასრულდა!
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          რამდენიმე წამში ავტომატურად გადახვალთ მთავარ გვერდზე.
        </p>
        <button
          onClick={navigateToMain}
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          გადადი მთავარ გვერდზე
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
