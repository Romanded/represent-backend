import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module.js';

process.on('uncaughtException', (error) => {
  console.error('UNCAUGHT EXCEPTION:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION:', reason);
  process.exit(1);
});

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
