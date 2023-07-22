import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

function setupSwaggerDocs(app) {
  const docConfig = new DocumentBuilder()
    .setTitle('Desafio Bhut API')
    .setDescription('API reference for Desafio Bhut API')
    .setVersion('0.1')
    .addServer('http://localhost:3000')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup('/docs', app, swaggerDoc, {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Desafio Bhut API Docs',
  });
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwaggerDocs(app);
  await app.listen(3000);
}
bootstrap();
