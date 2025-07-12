'use client';
import Loader from '@/components/shared/loader';
import TimeSheetTable from '@/features/timesheets/components/timesheet-table';
import { GetTimeSheetsResponse, ITimeSheetItem } from '@/types';
import React, { useEffect, useState } from 'react';

const DashboardPage = () => {
  const [timeSheets, setTimeSheets] = useState<ITimeSheetItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getTimeSheets() {
      try {
        setIsLoading(true);
        const res = await fetch('/api/v1/timesheets');
        const data = (await res.json()) as GetTimeSheetsResponse;
        setTimeSheets(data.timeSheets);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getTimeSheets();
  }, []);

  return (
    <div className="bg-white w-5xl flex flex-col justify-center rounded-[8px] p-4 shadow">
      <h2 className="text-xl text-gray-900 font-bold mb-4">Your Timesheets</h2>
      {isLoading ? (
        <Loader text='Loading TimeSheets' />
      ) : (
        <TimeSheetTable timeSheetList={timeSheets} />
      )}
    </div>
  );
};

export default DashboardPage;
