import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class RoleDetailDto {
  @Field()
  @IsNotEmpty({ message: 'RoleId is required.' })
  roleId: number;

  @Field()
  @IsNotEmpty({ message: 'canRead is required.' })
  canRead: boolean;

  @Field()
  @IsNotEmpty({ message: 'canWrite is required.' })
  canWrite: boolean;

  @Field()
  @IsNotEmpty({ message: 'canUpdate is required.' })
  canUpdate: boolean;

  @Field()
  @IsNotEmpty({ message: 'canDelete is required.' })
  canDelete: boolean;
}
