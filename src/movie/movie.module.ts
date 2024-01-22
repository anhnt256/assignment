import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieResolver } from './movie.resolver';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from "@/providers/prisma/prisma.service";
import { PrismaSelectService } from "@/providers/prisma/prisma-select-service";

@Module({
  providers: [
    MovieService,
    MovieResolver,
    PrismaService,
    JwtService,
    ConfigService,
    PrismaSelectService
  ],
})
export class MovieModule {}
