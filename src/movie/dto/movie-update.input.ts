import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

@InputType()
class MovieUpdateInput {
  @Type(() => Number)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  movie?: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @Type(() => String)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imdb_url?: string | null;
}

export { MovieUpdateInput };
