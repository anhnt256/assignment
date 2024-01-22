import { ArgsType, Field } from '@nestjs/graphql';
import { MovieWhereUniqueInput } from '@/movie/dto/movie-where-unique.input';

@ArgsType()
export class MovieFindUniqueArgs {
  @Field(() => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;
}