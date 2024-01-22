import { Args, Info, Mutation, Query, Resolver, Int } from "@nestjs/graphql";
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
import { MovieWhereUniqueInput } from "@/movie/dto/movie-where-unique.input";
import { GraphQLResolveInfo } from "graphql";

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
  // @UseGuards(UserAuthGuard)
  @Query(() => [Movie])
  public async movies(@Args() args: MovieFindManyArgs): Promise<Movie[]> {
    this.logger.log(`Getting a list of movies`);
    console.log("args", args);
    return this.movieService.findMany(args);
  }

  // @UseFilters(GraphQLErrorFilter)
  // @UseGuards(UserAuthGuard)
  @Query(() => Movie)

  public async movie(
    @Args("where") args: MovieWhereUniqueInput,
    @Info() info?: GraphQLResolveInfo
  ): Promise<Movie>  {
    console.log("id", args.id);
    return await this.movieService.findOne(args, info);
  }
}
