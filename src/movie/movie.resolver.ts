import { Args, Info, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Logger, UseFilters, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from '@/movie/types/movie.type';
import { GraphQLErrorFilter } from "@/filters/custom-exception";
import { AdminAuthGuard } from "@/guards/admin-auth.guard";
import { UserAuthGuard } from "@/guards/user-auth.guard";
import { MovieWhereUniqueInput } from "@/movie/dto/movie-where-unique.input";
import { MovieOrderByInput } from "@/movie/dto/movie-order-by.input";
import { MovieWhereInput } from "@/movie/dto/movie-where.input";
import { MovieUpdateInput } from "@/movie/dto/movie-update.input";
import { MovieCreateInput } from "@/movie/dto/movie-create-input";
import { GraphQLResolveInfo } from "graphql";

@Resolver()
export class MovieResolver {
  private readonly logger = new Logger(MovieResolver.name);
  constructor(private readonly movieService: MovieService) {}

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(AdminAuthGuard)
  // User with role admin can access this query
  @Mutation(() => Movie)
  public async createMovie(@Args('data') data: MovieCreateInput): Promise<Movie> {
    this.logger.log(`Creating a movie`, data);
    return await this.movieService.create({data});
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(AdminAuthGuard)
  // User with role admin can access this query
  @Mutation(() => Movie)
  public async deleteMovie(    @Args('where') where: MovieWhereUniqueInput,): Promise<Movie> {
    this.logger.log(`Deleting a movie`, where);
    return await this.movieService.delete({where});
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(AdminAuthGuard)
  // User with role admin can access this query
  @Mutation(() => Movie)
  public async updateMovie(@Args('data') data: MovieUpdateInput, @Args('where') where: MovieWhereUniqueInput,): Promise<Movie> {
    this.logger.log(`Updating a movie`);
    return await this.movieService.update({
      where,
      data: {
        ...data,
        updatedAt: new Date(),
      },
    });
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(UserAuthGuard)

  // User with role user and admin can access this query

  @Query(() => [Movie])
  public async movies(@Args('where') where: MovieWhereInput,
                      @Args('orderBy') orderBy: MovieOrderByInput,
                      @Args('skip') skip: number,
                      @Args('take') take: number): Promise<Movie[]> {
    this.logger.log(`Getting a list of movies`);
    return this.movieService.movies({where, orderBy, skip, take});
  }

  @UseFilters(GraphQLErrorFilter)
  @UseGuards(UserAuthGuard)
  // User with role user and admin can access this query
  @Query(() => Movie, { nullable: false })

  public async movie(
    @Args('where') where: MovieWhereUniqueInput,
    @Info() info?: GraphQLResolveInfo
  ): Promise<Movie>  {
    this.logger.log(`Getting a movie`);
    return await this.movieService.movie(where, info);
  }
}
