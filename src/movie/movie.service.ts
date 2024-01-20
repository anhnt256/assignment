import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MovieDto } from './dto/movie.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Movie, Prisma } from '@prisma/client';

@Injectable()
export class MovieService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async create<T extends Prisma.MovieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCreateArgs>,
  ): Promise<Movie> {
    return await this.prisma.movie.create(args);
  }

  public async findMany<T extends Prisma.MovieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindManyArgs>,
  ): Promise<Movie[]> {
    return await this.prisma.movie.findMany(args);
  }

  public async update<T extends Prisma.MovieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieUpdateArgs>,
  ): Promise<Movie> {
    return await this.prisma.movie.update(args);
  }

  public async findOne<T extends Prisma.MovieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindUniqueArgs>,
  ): Promise<Movie> {
    return await this.prisma.movie.findUnique(args);
  }
}
