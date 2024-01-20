import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
class MovieWhereUniqueInput {
  @IsString()
  @Field(() => Number)
  id!: number;
}

export { MovieWhereUniqueInput };
