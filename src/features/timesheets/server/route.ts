import {
  ITask,
  ITimeSheetItem,
  ITimeSheetTasks,
  TimeSheetStatus,
} from '@/types';
import { Hono } from 'hono';
import { v4 as uuidv4 } from 'uuid';

const mockTimeSheetData: ITimeSheetItem[] = [
  {
    id: 'b7e2c1a0-1f2b-4c3d-8e9f-1a2b3c4d5e6f',
    week: 1,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: 'c8f3d2b1-2e3c-5d4e-9f0a-2b3c4d5e6f7a',
    week: 2,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: 'd9a4e3c2-3f4d-6e5f-0a1b-3c4d5e6f7a8b',
    week: 3,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.IN_COMPLETE,
  },
  {
    id: 'e0b5f4d3-4a5e-7f6a-1b2c-4d5e6f7a8b9c',
    week: 4,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: 'f1c6a5e4-5b6f-8a7b-2c3d-5e6f7a8b9c0d',
    week: 5,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.MISSING,
  },
];

const timeSheetTasksMockData: ITimeSheetTasks[] = [
  {
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6',
    date: 'Jan 21',
    tasks: [
      {
        id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    id: 'd4e5f6a7-b8c9-0d1e-2f3a-4b5c6d7e8f9a',
    date: 'Jan 22',
    tasks: [
      {
        id: 'e5f6a7b8-c9d0-1e2f-3a4b-5c6d7e8f9a0b',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'f6a7b8c9-d0e1-2f3a-4b5c-6d7e8f9a0b1c',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'a7b8c9d0-e1f2-3a4b-5c6d-7e8f9a0b1c2d',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    id: 'b8c9d0e1-f2a3-4b5c-6d7e-8f9a0b1c2d3e',
    date: 'Jan 23',
    tasks: [
      {
        id: 'c9d0e1f2-a3b4-5c6d-7e8f-9a0b1c2d3e4f',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'd0e1f2a3-b4c5-6d7e-8f9a-0b1c2d3e4f5a',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'e1f2a3b4-c5d6-7e8f-9a0b-1c2d3e4f5a6b',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    id: 'f2a3b4c5-d6e7-8f9a-0b1c-2d3e4f5a6b7c',
    date: 'Jan 24',
    tasks: [
      {
        id: 'a3b4c5d6-e7f8-9a0b-1c2d-3e4f5a6b7c8d',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'b4c5d6e7-f8a9-0b1c-2d3e-4f5a6b7c8d9e',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'c5d6e7f8-a9b0-1c2d-3e4f-5a6b7c8d9e0f',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    id: 'd6e7f8a9-b0c1-2d3e-4f5a-6b7c8d9e0f1a',
    date: 'Jan 25',
    tasks: [],
  },
];

const timeSheetDetailsMockData = {
  dateRange: {
    startDate: '2024-01-01',
    endDate: '2024-01-05',
  },
  totalHours: 40,
  loggedHours: 20,
  remainingHours: 20,
  timeSheetTasks: timeSheetTasksMockData,
};

const app = new Hono()
  .get('/', async (c) => {
    return c.json({
      timeSheets: mockTimeSheetData,
      success: true,
    });
  })
  .get('/:id', async (c) => {
    const { id } = c.req.param();
    console.log('ID: ', id);

    return c.json({
      data: timeSheetDetailsMockData,
      success: true,
    });
  })
  .post('/:id/day/:dayId', async (c) => {
    const { id, dayId } = c.req.param();
    console.log('ID: ', id);
    const newTask = (await c.req.json()) as ITask;
    if (newTask.hours > timeSheetDetailsMockData.remainingHours) {
      return c.json(
        {
          message: 'Cannot log time greater then remaining',
          success: false,
        },
        400
      );
    }

    timeSheetDetailsMockData.remainingHours -= newTask.hours;
    timeSheetDetailsMockData.loggedHours += newTask.hours;

    const dayIndex = timeSheetTasksMockData?.findIndex(
      (day) => day.id === dayId
    );

    if (dayIndex !== undefined && dayIndex !== -1) {
      timeSheetTasksMockData[dayIndex].tasks = [
        ...timeSheetTasksMockData[dayIndex].tasks,
        { ...{ id: uuidv4(), ...newTask } },
      ];
      return c.json({
        message: 'Task Added Successfully',
        success: true,
      });
    } else {
      return c.json(
        {
          message: 'Something went wrong',
          success: false,
        },
        500
      );
    }
  });

export default app;
