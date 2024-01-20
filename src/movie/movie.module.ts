import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    MovieService,
    MovieResolver,
    PrismaService,
    JwtService,
    ConfigService,
  ],
})
export class MovieModule {}
