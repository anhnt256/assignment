import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Logger, UseFilters, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '@/movie/types/movie.type';
import { MovieCreateArgs } from '@/movie/dto/movie-create.args';
import { MovieUpdateArgs } from '@/movie/dto/movie-update.args';
import { MovieFindManyArgs } from '@/movie/dto/movie-find-many.args';
import { MovieFindUniqueArgs } from '@/movie/dto/movie-find-unique.args';
import { GraphQLErrorFilter } from "@/filters/custom-exception";
import { AdminAuthGuard } from "@/guards/admin-auth.guard";
import { UserAuthGuard } from "@/guards/user-auth.guard";

@Resolver()
export class MovieResolver {
  private readonly logger = new Logger(MovieResolver.name);
  constructor(private readonly movieService: MovieService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(AdminAuthGuard)
  @Mutation(() => Movie)
  public async createMovie(@Args() args: MovieCreateArgs): Promise<Movie> {
    this.logger.log(`Creating a movie`);
    return await this.movieService.create(args);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(AdminAuthGuard)
  @Mutation(() => Movie)
  public async updateMovie(@Args() args: MovieUpdateArgs): Promise<Movie> {
    this.logger.log(`Updating a movie`);
    return await this.movieService.update({
      ...args,
      data: {
        updatedAt: new Date(),
      },
    });
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(UserAuthGuard)
  @Query(() => [Movie])
  public async movies(@Args() args: MovieFindManyArgs): Promise<Movie[]> {
    this.logger.log(`Getting a list of movies`);
    return this.movieService.findMany(args);
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(UserAuthGuard)
  @Query(() => Movie)
  public async movie(@Args() args: MovieFindUniqueArgs): Promise<Movie> {
    this.logger.log(`Getting one movie`);
    return this.movieService.findOne(args);
  }
}
