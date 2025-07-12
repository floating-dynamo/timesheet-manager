import { Hono } from 'hono';

const taskTypesMock = ['Bug fixes', 'Features', 'Refactor'];

const app = new Hono().get('/', async (c) => {
  return c.json({
    data: {
      taskTypes: taskTypesMock,
    },
    success: true,
  });
});

export default app;
