import Footer from '@/components/footer';
import Header from '@/components/header';
import React, { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="bg-[#F8F8F8] min-h-screen font-[family-name:var(--font-inter)]">
      <Header user={{ name: 'John Doe', email: 'sro@gmail.com' }} />
      <div className="w-full flex flex-col justify-center items-center h-[576px]">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
