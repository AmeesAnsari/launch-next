import React from 'react';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={'flex min-h-screen w-full text-gray-900'}>
      <main className={'flex w-full flex-col dark:bg-dark-bg'}>{children}</main>
    </div>
  );
};
export default DashboardWrapper;
