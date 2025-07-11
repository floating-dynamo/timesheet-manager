import { TimeSheetStatus } from '@/types';
import Link from 'next/link';
import React from 'react';

interface TimeSheetActionProps {
  status: TimeSheetStatus;
  id: string;
}

const TimeSheetAction = ({ status, id }: TimeSheetActionProps) => {
  if (status === TimeSheetStatus.COMPLETED) {
    return <Link href={`timesheets/${id}`}>View</Link>;
  }

  if (status === TimeSheetStatus.IN_COMPLETE) {
    return <a href="">Update</a>;
  }

  if (status === TimeSheetStatus.MISSING) {
    return <a href="">Create</a>;
  }

  return <div>Action Unkown</div>;
};

export default TimeSheetAction;
