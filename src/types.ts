import type { Express } from 'express';

import type { IConfig } from './services/config';

export interface IApp extends Express {
  config: IConfig;
}
