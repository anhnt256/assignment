import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsOptional } from "class-validator";

@InputType()
class MovieCreateInput {
  @Type(() => Number)
  @Field(() => Number)
  @IsNotEmpty()
  id: number;

  @Type(() => Number)
  @IsOptional()
  @Field(() => Number)
  rating: number | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  movie: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imdb_url: string | null;
}

export { MovieCreateInput };
