import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(+process.env.PORT, () => {
    Logger.log(
      'Listening at http://localhost:' + +process.env.PORT + '/' + globalPrefix,
    );
  });
}
bootstrap();
