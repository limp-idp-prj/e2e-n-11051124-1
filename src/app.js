import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.json({
    service: process.env.SERVICE_NAME ?? 'e2e-n-11051124-1',
    description: 'auto run 1',
  });
});

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;
