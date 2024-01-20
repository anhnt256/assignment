import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Logger, UseFilters, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { UserAuthGuard } from '../guards/user-auth.guard';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { Movie } from '@/movie/types/movie.type';
import { MovieCreateArgs } from '@/movie/dto/movie-create.args';
import { MovieUpdateArgs } from '@/movie/dto/movie-update.args';
import { MovieFindManyArgs } from '@/movie/dto/movie-find-many.args';
import { MovieFindUniqueArgs } from '@/movie/dto/movie-find-unique.args';

@Resolver()
export class MovieResolver {
  private readonly logger = new Logger(MovieResolver.name);
  constructor(private readonly movieService: MovieService) {}

  @Mutation(() => Movie)
  public async createPayment(@Args() args: MovieCreateArgs): Promise<Movie> {
    this.logger.log(`Creating a payment`);
    return await this.movieService.create(args);
  }

  @Mutation(() => Movie)
  public async updatePayment(@Args() args: MovieUpdateArgs): Promise<Movie> {
    this.logger.log(`Updating a payment`);
    return await this.movieService.update({
      ...args,
      data: {
        updatedAt: new Date(),
      },
    });
  }

  @Query(() => [Movie])
  public async payments(@Args() args: MovieFindManyArgs): Promise<Movie[]> {
    this.logger.log(`Getting a list of payments`);
    return this.movieService.findMany(args);
  }

  @Query(() => Movie)
  public async payment(@Args() args: MovieFindUniqueArgs): Promise<Movie> {
    this.logger.log(`Getting one payment`);
    return this.movieService.findOne(args);
  }
}
