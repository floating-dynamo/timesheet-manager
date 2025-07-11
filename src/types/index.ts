export interface IUser {
  name: string;
  email: string;
}

export enum TimeSheetStatus {
  COMPLETED = 'completed',
  IN_COMPLETE = 'in_complete',
  MISSING = 'missing',
}

export interface ITimeSheetItem {
  id: string;
  week: number;
  dateRange: {
    startDate: string;
    endDate: string;
  };
  status: TimeSheetStatus;
}
