'use client';

import { useEffect, useState } from 'react';

import { Splash } from '@/components';

import { SelectModel } from './_components';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return <div className="bg-gray-cold-10 h-full">{isLoading ? <Splash /> : <SelectModel />}</div>;
};

export default Home;
