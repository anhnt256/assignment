import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UserRoleMapDto {
  @Field()
  @IsNotEmpty({ message: 'RoleId is required.' })
  roleId: number;

  @Field()
  @IsNotEmpty({ message: 'UserId is required.' })
  userId: number;
}
