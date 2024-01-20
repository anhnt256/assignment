import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Movie {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  movie: string;

  @Field({ nullable: true })
  rating: number;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  imdb_url: string;

  @Field({ nullable: true })
  createdBy?: number;

  @Field({ nullable: true })
  updatedBy?: number;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field({ nullable: true })
  updatedAt?: Date;
}

@ObjectType()
export class MovieResponse {
  @Field(() => Movie, { nullable: true })
  movie?: Movie;
}
