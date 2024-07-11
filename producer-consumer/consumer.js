import { Connection } from 'rabbitmq-client';

const connection = new Connection(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`);
connection.on('error', (err) => console.error(err));
connection.on('connection', () => console.log(`Connection to RabbitMQ established`));


connection.createConsumer({
  queue: 'my-queue',
  queueOptions: { durable: true },
  qos: { prefetchCount: 1 },
}, async (message) => {
  console.log(`Message received: ${message.body}`);
})