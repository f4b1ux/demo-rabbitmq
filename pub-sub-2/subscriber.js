import { Connection } from "rabbitmq-client";

const connection = new Connection(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`);
connection.on('error', (err) => console.error(err));
connection.on('connection', () => console.log(`Connection to RabbitMQ established`));

const subscriberId = process.argv[2] || 'default';
console.log(`Subscriber ID: ${subscriberId}`);

connection.createConsumer({
  queue: `subscriber-queue-direct-${subscriberId}`,
  queueOptions: { durable: true },
  qos: { prefetchCount: 1 },
  exchanges: [{ exchange: 'my-exchange-direct', type: 'direct' }],
  queueBindings: [{ exchange: 'my-exchange-direct', routingKey: subscriberId }],
}, async (message) => {
  console.log('Message received:', message.body);
})