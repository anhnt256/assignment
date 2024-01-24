import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from "cookie-parser";
import RateLimit from 'express-rate-limit';
import helmet from 'helmet';
import compression from 'compression';

import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './config/swagger';
import { environment } from "@/common/enrironment";
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const env = environment();

  app.enableCors({
    origin: ['http://localhost:5173', "https://studio.apollographql.com"],
    credentials: true,
    // all headers that client are allowed to use
    allowedHeaders: [
      'Accept',
      'Authorization',
      'Content-Type',
      'X-Requested-With',
      'apollo-require-preflight',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  });
  app.use(cookieParser());
  app.useLogger(new Logger());

  if (env.isProduction) {
    app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
    app.use(compression());
    app.use(helmet());

    app.use(
      RateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
      })
    );
  }

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors) => {
        const formattedErrors = errors.reduce((accumulator, error) => {
          accumulator[error.property] = Object.values(error.constraints).join(
            ', ',
          );
          return accumulator;
        }, {});

        throw new BadRequestException(formattedErrors);
      },
    }),
  );
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
