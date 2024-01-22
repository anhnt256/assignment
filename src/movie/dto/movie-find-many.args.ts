import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MovieWhereInput } from '@/movie/dto/movie-where.input';
import { MovieOrderByInput } from '@/movie/dto/movie-order-by.input';

@ArgsType()
class MovieFindManyArgs {
  @Field(() => MovieWhereInput, { nullable: true })
  @Type(() => MovieWhereInput)
  where?: MovieWhereInput;

  @Field(() => [MovieOrderByInput], { nullable: true })
  @Type(() => MovieOrderByInput)
  orderBy?: Array<MovieOrderByInput>;

  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MovieFindManyArgs };
