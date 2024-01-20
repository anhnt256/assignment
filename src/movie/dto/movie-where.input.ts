import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { DateTimeNullableFilter } from '@/util/datetime-nullable-filter';
import { FloatNullableFilter } from '@/util/float-nullable-filter';
import { StringFilter } from '@/util/string-filter';
import { StringNullableFilter } from '@/util/string-nullable-filter';

@InputType()
class MovieWhereInput {
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @Type(() => FloatNullableFilter)
  @IsOptional()
  @Field(() => FloatNullableFilter, {
    nullable: true,
  })
  rating?: FloatNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  imdb_url?: StringNullableFilter;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  createdAt?: DateTimeNullableFilter;

  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeNullableFilter;
}

export { MovieWhereInput };
