import { Connection } from 'rabbitmq-client';

const connection = new Connection(`amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}:${process.env.RABBITMQ_PORT}`);
connection.on('error', (err) => console.error(err));
connection.on('connection', () => console.log(`Connection to RabbitMQ established`));

// Create a publisher for the queue
const publisher = connection.createPublisher({
  confirm: true,
  maxAttempts: 3,
  queues: [{queue: 'my-queue', durable: true}],
})

setInterval(async () => {
  await publisher.send('my-queue', 'Hello World!')
  console.log('Message sent')
}, 3000);