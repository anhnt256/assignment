import { ArgsType, Field } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from '@/movie/dto/movie-where-unique.input';

@ArgsType()
class MovieFindUniqueArgs {
  @Field(() => MovieWhereUniqueInput, { nullable: true })
  where!: MovieWhereUniqueInput;
}

export { MovieFindUniqueArgs };
