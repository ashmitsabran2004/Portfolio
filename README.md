# MERN Portfolio (React + Tailwind + Express + Mongo)

## Quick start

1) Install dependencies (root, client, server)

```bash
npm install
cd client && npm install
cd ../server && npm install
```

2) Configure env (optional Mongo)

- Copy `server/.env.example` → `server/.env`
- Copy `client/.env.example` → `client/.env`

If you don’t set `MONGO_URI`, the API runs in **in-memory mode** (still usable for the UI).

3) Run both apps

From the repo root:

```bash
npm run dev
```

- Client: `http://localhost:5173`
- Server: `http://localhost:5000` (health: `/api/health`)

