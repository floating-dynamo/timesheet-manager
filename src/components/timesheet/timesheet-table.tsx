import { ITimeSheetItem } from '@/types';
import React from 'react';
import TimeSheetAction from './timesheet-action';
import { dateDisplayFormat, getStatusColor, getStatusLabel } from '@/lib/utils';

interface TimeSheetTableProps {
  timeSheetList: ITimeSheetItem[];
}

const TimeSheetTable = ({ timeSheetList }: TimeSheetTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 font-semibold text-gray-500">WEEK #</th>
            <th className="px-4 py-3 font-semibold text-gray-500">DATE</th>
            <th className="px-4 py-3 font-semibold text-gray-500">STATUS</th>
            <th className="px-4 py-3 font-semibold text-gray-500">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {timeSheetList.map((row) => (
            <tr key={row.id} className="border-t last:border-b border-gray-200">
              <td className="px-4 py-3">{row.week}</td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {dateDisplayFormat(
                  row.dateRange.startDate,
                  row.dateRange.endDate
                )}
              </td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    row.status
                  )}`}
                >
                  {getStatusLabel(row.status)}
                </span>
              </td>
              <td className="px-4 py-3">
                <TimeSheetAction status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeSheetTable;
