import Footer from '@/components/footer';
import TimeSheetTable from '@/components/timesheet/timesheet-table';
import { ITimeSheetItem, TimeSheetStatus } from '@/types';
import React from 'react';

const data: ITimeSheetItem[] = [
  {
    id: '3rwedfdadfad',
    week: 1,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: 'asaqaefdwadoamad',
    week: 2,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: '3asdasdasdrwedfdadfad',
    week: 3,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.IN_COMPLETE,
  },
  {
    id: '3adsfadsfasdrwedfdadfad',
    week: 4,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: '3afadfasfasrwedfasdasadadfad',
    week: 5,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.MISSING,
  },
];

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[576px]">
      <div className="bg-white w-5xl flex flex-col justify-center rounded-[8px] p-4 shadow">
        <h2 className="text-xl text-gray-900 font-bold mb-4">
          Your Timesheets
        </h2>
        <TimeSheetTable timeSheetList={data} />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
