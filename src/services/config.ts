import dotenv from 'dotenv';
import { z } from 'zod';

export function createConfig() {
  dotenv.config();

  const config = z
    .object({
      PORT: z.string().default('8080'),

      KAFKA_CLIENT_ID: z.string(),
      KAFKA_BROKERS: z.string(),
      KAFKA_TOPIC: z.string(),
      KAFKA_GROUP_ID: z.string(),
    })
    .parse(process.env);

  return config;
}

export type IConfig = ReturnType<typeof createConfig>;
