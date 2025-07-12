import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import timesheets from '../../../features/timesheets/server/route';
import projects from '../../../features/projects/server/route';
import metadata from '../../../features/metadata/server/route';

export const runtime = 'nodejs';

const apiVersion = 'v1';

const app = new Hono()
  .basePath(`/api/${apiVersion}`)
  .route('/timesheets', timesheets)
  .route('/projects', projects)
  .route('/metadata', metadata);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof app;
