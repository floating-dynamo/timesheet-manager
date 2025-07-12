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

export interface ITask {
  id?: string;
  project: string;
  typeOfWork?: string;
  description: string;
  hours: number;
  date: Date;
}

export interface GetTimeSheetsResponse {
  timeSheets: ITimeSheetItem[];
  success: boolean;
}

export interface ITimeSheetTasks {
  id: string;
  date: string;
  tasks: ITask[];
}

export interface ITimeSheetDetailsResponse {
  data: {
    totalHours: number;
    loggedHours: number;
    remainingHours: number;
    dateRange: {
      startDate: string;
      endDate: string;
    };
    timeSheetTasks: ITimeSheetTasks[];
  };
  success: boolean;
}

export interface GetProjectsResponse {
  projects: string[];
  success: boolean;
}

export interface GetMetadataResponse {
  data: {
    taskTypes: string[];
  };
  success: true;
}
