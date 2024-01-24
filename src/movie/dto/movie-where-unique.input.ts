import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from "class-validator";

@InputType()
export class MovieWhereUniqueInput {
  @Field(() => Number)
  @IsNotEmpty()
  id!: number;
}