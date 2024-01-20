import { ArgsType, Field } from '@nestjs/graphql';
import { MovieCreateInput } from '@/movie/dto/movie-create-input';

@ArgsType()
class MovieCreateArgs {
  @Field(() => MovieCreateInput, { nullable: false })
  data!: MovieCreateInput;
}

export { MovieCreateArgs };
