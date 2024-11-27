import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService();
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Remueve todo lo que no está incluido en los DTOs.
      forbidNonWhitelisted: true, //Retorna bad request si hay propiedades en el objeto no requeridas
    }),
  );

  const port = configService.get<string>('PORT') || 3000;
  const appName = configService.get<string>('APP_NAME') || 'MyApp';
  const appDescription =
    configService.get<string>('APP_DESCRIPTION') ||
    'My Application Description';

  await app.listen(port, () => {
    logger.log('=====================================================');
    logger.log('Application has started successfully');
    logger.log('PORT: ' + port);
    logger.log('Nombre aplicación: ' + appName);
    logger.log('Descripción: ' + appDescription);
    logger.log('=====================================================');
  });
}
bootstrap();
