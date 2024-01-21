import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '@prisma/client';
import { PrismaService } from "@/prisma.service";

@Injectable()
export class MovieService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  public async create<T extends Prisma.MovieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCreateArgs>,
  ): Promise<Movie> {
    return this.prisma.movie.create(args);
  }

  public async findMany<T extends Prisma.MovieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindManyArgs>,
  ): Promise<Movie[]> {
    return this.prisma.movie.findMany(args);
  }

  public async update<T extends Prisma.MovieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieUpdateArgs>,
  ): Promise<Movie> {
    return this.prisma.movie.update(args);
  }

  public async findOne<T extends Prisma.MovieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindUniqueArgs>,
  ): Promise<Movie> {
    return this.prisma.movie.findUnique(args);
  }
}
