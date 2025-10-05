import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;
  await app.listen(port);

  console.log(`App running on port : http://localhost/${port}/`);
}

bootstrap().catch((error) => {
  console.error('❌ Error starting the application:', error);
});
