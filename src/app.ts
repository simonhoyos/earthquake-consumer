import express from 'express';

import { createConfig } from './services/config.ts';
import { EarthquakeEventConsumer } from './services/earthquake.ts';
import type { IApp } from './types.ts';

export async function createApp() {
  const app = express() as IApp;

  const config = createConfig();

  app.config = config;

  new EarthquakeEventConsumer(app.config).consumeData();

  return { app, port: config.PORT };
}
