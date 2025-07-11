import { TimeSheetStatus } from '@/types';
import React from 'react';

interface TimeSheetActionProps {
  status: TimeSheetStatus;
}

const TimeSheetAction = ({ status }: TimeSheetActionProps) => {
  if (status === TimeSheetStatus.COMPLETED) {
    return <a href="">View</a>;
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
