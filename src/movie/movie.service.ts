import { Injectable } from '@nestjs/common';
import { Movie, Prisma } from '@prisma/client';
import { PrismaService } from "@/providers/prisma/prisma.service";
import { MovieWhereUniqueInput } from "@/movie/dto/movie-where-unique.input";
import { PrismaSelectService } from "@/providers/prisma/prisma-select-service";
import { GraphQLResolveInfo } from "graphql";

@Injectable()
export class MovieService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelectService: PrismaSelectService
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

  public async findOne(args: MovieWhereUniqueInput, info?: GraphQLResolveInfo) {
    const select = this.prismaSelectService.getValue(info);
    return await this.prisma.movie.findUnique({
      ...select,
      where: args,
    });
  }

}
