import { Hono } from 'hono';

const projectsMock = ['Project 1', 'Project 2', 'Project 3'];

const app = new Hono().get('/', async (c) => {
  return c.json({
    projects: projectsMock,
    success: true,
  });
});

export default app;
