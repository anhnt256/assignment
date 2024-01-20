import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsFloat } from '../../validation/IsFloat';

@InputType()
export class MovieDto {
  @Field()
  @IsNotEmpty({ message: 'Name is required.' })
  @IsString({ message: 'Name must be a string.' })
  name: string;

  @Field()
  @IsNotEmpty({ message: 'Rating is required.' })
  @IsFloat({ message: 'Rating must be a float' })
  rating: number;

  @Field()
  @IsNotEmpty({ message: 'Image is required.' })
  @IsString({ message: 'Image must be a string.' })
  image: string;

  @Field()
  @IsNotEmpty({ message: 'Imdb url is required.' })
  @IsString({ message: 'Imdb url must be a string.' })
  imdb_url: string;
}
