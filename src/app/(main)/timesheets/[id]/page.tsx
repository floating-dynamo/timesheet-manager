'use client';
import AddTaskModal from '@/features/tasks/components/add-task-modal';
import { ITask } from '@/types';
import React, { useState } from 'react';

const mockData = [
  {
    date: 'Jan 21',
    tasks: [
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
    ],
  },
  {
    date: 'Jan 22',
    tasks: [
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
    ],
  },
  {
    date: 'Jan 23',
    tasks: [
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
    ],
  },
  {
    date: 'Jan 24',
    tasks: [
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
      { name: 'Homepage Development', hours: 4, project: 'Project Name' },
    ],
  },
  {
    date: 'Jan 25',
    tasks: [],
  },
];

const TimeSheetDetailsPage = () => {
  const [openTaskModal, setOpenTaskModal] = useState(false);

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

  return (
    <div className="w-5xl mx-auto mt-6 bg-white rounded-xl shadow p-6 min-h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">This week&apos;s timesheet</h2>
        <div className="flex items-center gap-2 flex-col">
          <span className="text-sm text-gray-900">20/40 hrs</span>
          <div className="flex-col-reverse flex items-end justify-center">
            <div className="w-44 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-400" style={{ width: '50%' }} />
            </div>
            <span className="text-xs text-gray-500">100%</span>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-400 mb-4">21 - 26 January, 2024</div>
      <div className="divide-y divide-gray-100">
        {mockData.map((day) => (
          <div key={day.date} className="py-4">
            <div className="font-semibold text-gray-700 mb-2">{day.date}</div>
            <div className="space-y-2">
              {day.tasks.map((task, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center bg-white border border-gray-200 rounded px-4 py-2"
                >
                  <div className="flex-1 text-sm text-gray-900 font-[500]">
                    {task.name}
                  </div>
                  <div className="text-xs text-gray-500 w-16 text-right">
                    {task.hours} hrs
                  </div>
                  <div className="ml-4 text-xs bg-blue-100 text-blue-800 rounded px-2 py-1 font-medium">
                    {task.project}
                  </div>
                  <button className="ml-4 text-gray-400 hover:text-gray-600">
                    <span className="sr-only">More</span>
                    &#x22EE;
                  </button>
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
