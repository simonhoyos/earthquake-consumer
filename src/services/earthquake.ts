import * as Kafka from 'node-rdkafka';

import type { IConfig } from './config.ts';

export class EarthquakeEventConsumer {
  stream: Kafka.ConsumerStream;

  constructor(config: IConfig) {
    // @ts-expect-error object include default but is not defined in the types
    this.stream = Kafka.default.KafkaConsumer.createReadStream(
      {
        'metadata.broker.list': config.KAFKA_BROKERS,
        'group.id': config.KAFKA_GROUP_ID,
        'socket.keepalive.enable': true,
        'enable.auto.commit': true,
      },
      {},
      {
        topics: config.KAFKA_TOPIC,
        waitInterval: 0,
        objectMode: false,
      },
    );
  }

  async consumeData() {
    this.stream.on('data', (message) => {
      // eslint-disable-next-line no-console
      console.log('Got message');
      // eslint-disable-next-line no-console
      console.log(JSON.parse(message));
    });
  }
}
