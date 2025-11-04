# Deployment Guide (Render + Vercel)

This project now supports the URP stack with a managed backend on Render and a static frontend on Vercel.

## 1. Backend (Render)
1. Create a new **Render Web Service** and connect this repository.
2. Set the start command to `npm run start` (after running `npm run build`).
3. Configure the following environment variables (see `.env.example`):
   - `DATABASE_URL`
   - `SESSION_SECRET`
   - `CORS_ALLOWED_ORIGINS` → include your Vercel preview and production domains separated by commas.
4. Provision a PostgreSQL instance (Render or Neon) and update `DATABASE_URL` accordingly.
5. Trigger a deployment. Render will expose a public HTTPS URL – e.g. `https://urp-backend.onrender.com`.

## 2. Frontend (Vercel)
1. Create a new Vercel project and import this repository.
2. Set the **Framework Preset** to “Vite” and override the build command to `npm run build:frontend`.
3. In the Environment Variables section, configure:
   - `VITE_API_BASE_URL` → the public Render backend URL from step 1.
4. Deploy. Vercel will serve the static bundle from `dist/public` and all API requests will be routed to the Render backend through the configured base URL.

## 3. Local Development
1. Copy `.env.example` to `.env` and adjust the values for your environment.
2. Run the backend: `npm run dev` (ensure PostgreSQL is running and `DATABASE_URL` is set).
3. Start the Vite dev server from `client`: `npm run dev -- --host` (or use the existing tooling). Requests default to the same origin; set `VITE_API_BASE_URL` when testing against remote backends.

## Notes
- CORS is restricted to a safe default list for local development. Production origins must be listed in `CORS_ALLOWED_ORIGINS`.
- Session cookies are automatically configured with `SameSite=None` and `Secure` when `NODE_ENV=production`, enabling cross-origin usage between Vercel (frontend) and Render (backend).
- User payloads returned by the API no longer include hashed passwords.
