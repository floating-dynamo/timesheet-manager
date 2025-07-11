import { Hono } from 'hono';

const app = new Hono().get('/', async (c) => {
  console.log(c);
  return c.json({
    message: 'Hello',
  });
});

export default app;
