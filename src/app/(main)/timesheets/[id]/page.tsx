'use client';
import Loader from '@/components/shared/loader';
import AddTaskModal from '@/features/tasks/components/add-task-modal';
import { dateDisplayFormat } from '@/lib/utils';
import { ITask, ITimeSheetDetailsResponse } from '@/types';
import { EllipsisVerticalIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

const TimeSheetDetailsPage = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [timesheetData, setTimeSheetData] =
    useState<ITimeSheetDetailsResponse | null>(null);
  const { id: timeSheetId } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [popoverTaskIdx, setPopoverTaskIdx] = useState<{ dayIdx: number; taskIdx: number } | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchTimeSheetDetails() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/v1/timesheets/${timeSheetId}`);
        const data = await res.json();
        console.log('Data: ', data.data);
        setTimeSheetData(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTimeSheetDetails();
  }, [timeSheetId]);

  // Close popover on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setPopoverTaskIdx(null);
      }
    }
    if (popoverTaskIdx !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverTaskIdx]);

  function showTaskModal() {
    setOpenTaskModal(true);
  }

  function onCloseTaskModal() {
    console.log('Task Modal Closed');
    setOpenTaskModal(false);
  }

  function onSubmitTask(task: ITask) {
    console.log(task);
    setOpenTaskModal(false);
  }

  if (isLoading || !timesheetData || !timeSheetId) {
    return (
      <div className="h-64 w-5xl bg-white flex items-center justify-center rounded-md shadow">
        <Loader text="Fetching Timesheet details" />
      </div>
    );
  }

  const hoursPercentage =
    (timesheetData?.loggedHours / timesheetData?.totalHours) * 100;

  return (
    <div className="w-5xl mx-auto mt-6 bg-white rounded-xl shadow p-6 min-h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">This week&apos;s timesheet</h2>
        <div className="flex items-center gap-2 flex-col">
          <span className="text-sm text-gray-900">
            {timesheetData?.loggedHours}/{timesheetData?.totalHours} hrs
          </span>
          <div className="flex-col-reverse flex items-end justify-center">
            <div className="w-44 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-400"
                style={{ width: `${hoursPercentage}%` }}
              />
            </div>
            <span className="text-xs text-gray-500">{hoursPercentage}%</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 mb-4">
        {dateDisplayFormat(
          timesheetData?.dateRange?.startDate || '',
          timesheetData?.dateRange?.endDate || ''
        )}
      </div>
      <div className="divide-y divide-gray-100">
        {timesheetData?.timeSheetTasks.map((day, dayIdx) => (
          <div key={day.date} className="py-4">
            <div className="font-semibold text-gray-700 mb-2">{day.date}</div>
            <div className="space-y-2">
              {day.tasks.map((task, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center bg-white border border-gray-200 rounded px-4 py-2 relative"
                >
                  <div className="flex-1 text-sm text-gray-900 font-[500]">
                    {task.description}
                  </div>
                  <div className="text-xs text-gray-500 w-16 text-right">
                    {task.hours} hrs
                  </div>
                  <div className="ml-4 text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 font-medium">
                    {task.project}
                  </div>
                  <button
                    className="ml-4 cursor-pointer text-gray-400 hover:text-gray-600 relative"
                    onClick={() => setPopoverTaskIdx({ dayIdx, taskIdx: tIdx })}
                  >
                    <EllipsisVerticalIcon className="size-4" />
                  </button>
                  {popoverTaskIdx && popoverTaskIdx.dayIdx === dayIdx && popoverTaskIdx.taskIdx === tIdx && (
                    <div
                      ref={popoverRef}
                      className="absolute right-0 top-8 z-10 bg-white border border-gray-200 rounded shadow-md w-28 py-1"
                    >
                      <button
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => {
                          setPopoverTaskIdx(null);
                          // handleEdit(task) // implement as needed
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        onClick={() => {
                          setPopoverTaskIdx(null);
                          // handleDelete(task) // implement as needed
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
              <button
                className="w-full border-2 border-dashed border-blue-200 rounded px-4 py-2 text-blue-600 text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200"
                onClick={showTaskModal}
              >
                + Add new task
              </button>
            </div>
          </div>
        ))}
      </div>
      {openTaskModal && (
        <AddTaskModal
          onClose={onCloseTaskModal}
          open={openTaskModal}
          onSubmit={onSubmitTask}
        />
      )}
    </div>
  );
};

export default TimeSheetDetailsPage;
