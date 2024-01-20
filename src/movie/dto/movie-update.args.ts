import { ArgsType, Field } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from '@/movie/dto/movie-where-unique.input';
import { MovieUpdateInput } from '@/movie/dto/movie-update.input';

@ArgsType()
class MovieUpdateArgs {
  @Field(() => MovieWhereUniqueInput, { nullable: false })
  where!: MovieWhereUniqueInput;

  @Field(() => MovieUpdateInput, { nullable: false })
  data!: MovieUpdateInput;
}

export { MovieUpdateArgs };
