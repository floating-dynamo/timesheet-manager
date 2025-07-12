import { ITimeSheetItem, ITimeSheetTasks, TimeSheetStatus } from '@/types';
import { Hono } from 'hono';

const mockTimeSheetData: ITimeSheetItem[] = [
  {
    id: '3rwedfdadfad',
    week: 1,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: 'asaqaefdwadoamad',
    week: 2,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: '3asdasdasdrwedfdadfad',
    week: 3,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.IN_COMPLETE,
  },
  {
    id: '3adsfadsfasdrwedfdadfad',
    week: 4,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.COMPLETED,
  },
  {
    id: '3afadfasfasrwedfasdasadadfad',
    week: 5,
    dateRange: {
      startDate: '2024-01-01',
      endDate: '2024-01-05',
    },
    status: TimeSheetStatus.MISSING,
  },
];

const timeSheetDetailsMockData: ITimeSheetTasks[] = [
  {
    date: 'Jan 21',
    tasks: [
      {
        id: 'aq11eadasadsd',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'isdfsdifwoeijoi',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    date: 'Jan 22',
    tasks: [
      {
        id: 'iijdaodjoij1oji',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'oasodkasodkaosdk',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'asdoasdaskdokoko',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    date: 'Jan 23',
    tasks: [
      {
        id: 'odoaskdoaksoaksasmas',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'asodasmdasasokaoskok',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'kasmdaksmdkasmdkamk',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    date: 'Jan 24',
    tasks: [
      {
        id: 'llmadlsdalmsdalmslm',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'alsmdasldmalsmdalsm',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
      {
        id: 'klmlkmlklkhjferreewae',
        description: 'Homepage Development',
        hours: 4,
        project: 'Project Name',
        date: new Date(),
      },
    ],
  },
  {
    date: 'Jan 25',
    tasks: [],
  },
];

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
      data: {
        dateRange: {
          startDate: '2024-01-01',
          endDate: '2024-01-05',
        },
        totalHours: 40,
        loggedHours: 20,
        remainingHours: 20,
        timeSheetTasks: timeSheetDetailsMockData,
      },
      success: true,
    });
  });

export default app;
