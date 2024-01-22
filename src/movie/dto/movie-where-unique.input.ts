import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MovieWhereUniqueInput {
  @Field(() => Number)
  id!: number;
}