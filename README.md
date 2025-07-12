# ticktock Timesheet App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 3. Login Credentials

- **Email:** user@example.com
- **Password:** password123

These are the only valid credentials for the mock login.

## Project Structure

- **/app**: Next.js app directory (routing, layouts, pages)
  - **(auth)/login/page.tsx**: Login screen
  - **(main)/timesheets/**: Timesheet dashboard and details
  - **api/**: API routes (NextAuth, timesheets, etc.)
- **/components**: Shared UI components (header, footer, loader, etc.)
- **/features**: Feature-specific logic and server routes (timesheets, projects, metadata)
- **/hooks**: Custom React hooks (e.g., `use-fetch.tsx`)
- **/lib**: Utilities (date formatting, status helpers)
- **/providers**: Context providers (e.g., NextAuth session)
- **/types**: TypeScript interfaces and enums

## API & Mock Data

- All API endpoints are mocked using Hono and are routed via `/api/v1/*`.
- Timesheet, project, and metadata data are static and live in `src/features/*/server/route.ts`.

## Authentication

- Uses NextAuth with credentials provider.
- Only `/user@example.com` with password `password123` is valid.

## Assumptions & Notes

- No real database or persistent storage; all data is in-memory and resets on server restart.
