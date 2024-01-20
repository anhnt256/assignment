import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserRoleMap {
  @Field({ nullable: true })
  id?: number;

  @Field()
  roleId: number;

  @Field()
  userId: number;

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
export class UserRoleMapResponse {
  @Field(() => UserRoleMap, { nullable: true })
  userRoleMap?: UserRoleMap;
}
