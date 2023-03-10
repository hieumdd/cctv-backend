import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule, {
        bufferLogs: true,
        cors: { origin: true, credentials: true },
    });

    const config = new DocumentBuilder().setTitle('cctv-backend').addBearerAuth().build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

    await app.listen(5000);
};

bootstrap();
