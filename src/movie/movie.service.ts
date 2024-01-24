import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Movie, Prisma } from '@prisma/client';
import { PrismaService } from "@/providers/prisma/prisma.service";
import { GraphQLResolveInfo } from "graphql";
import { PrismaSelectService } from "@/providers/prisma/prisma-select-service";

@Injectable()
export class MovieService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelectService: PrismaSelectService
  ) {}

  public async create<T extends Prisma.MovieCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieCreateArgs>,
  ): Promise<Movie> {
    try {
      return this.prisma.movie.create(args);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  public async update<T extends Prisma.MovieUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieUpdateArgs>,
  ): Promise<Movie> {
    try {
      return this.prisma.movie.update(args);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async delete<T extends Prisma.MovieFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindUniqueArgs>,
  ) {
    try {
      return this.prisma.movie.delete(args);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async movie<T extends Prisma.MovieWhereUniqueInput>(
    where: Prisma.SelectSubset<T, Prisma.MovieWhereUniqueInput>,
    info?: GraphQLResolveInfo
  ) {
    try {
      const select = this.prismaSelectService.getValue(info);
      return this.prisma.movie.findUnique({
        ...select,
        where,
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async movies<T extends Prisma.MovieFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MovieFindManyArgs>,
  ): Promise<Movie[]> {
    try {
      return this.prisma.movie.findMany(args);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
