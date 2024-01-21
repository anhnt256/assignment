import { Field, InputType } from '@nestjs/graphql';

@InputType()
class MovieWhereUniqueInput {
  @Field(() => Number)
  id!: number;
}

export { MovieWhereUniqueInput };
