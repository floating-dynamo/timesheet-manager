import { TimeSheetStatus } from '@/types';
import { format, parseISO } from 'date-fns';

export function getStatusColor(status: TimeSheetStatus) {
  switch (status) {
    case TimeSheetStatus.COMPLETED:
      return 'bg-green-100 text-green-700';
    case TimeSheetStatus.IN_COMPLETE:
      return 'bg-yellow-100 text-yellow-700';
    case TimeSheetStatus.MISSING:
      return 'bg-pink-100 text-pink-700';
    default:
      return 'bg-pink-100 text-pink-700';
  }
}

export function getStatusLabel(status: TimeSheetStatus) {
  const metadata = {
    completed: 'COMPLETED',
    in_complete: 'IN COMPLETE',
    missing: 'MISSING',
  };
  return metadata[status] || 'UNKOWN';
}

export function dateDisplayFormat(start: string, end: string) {
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  return `${format(startDate, 'd')} - ${format(endDate, 'd MMMM, yyyy')}`;
}
