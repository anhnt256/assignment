import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoleDetail {
  @Field({ nullable: true })
  id?: number;

  @Field()
  roleId: number;

  @Field()
  canRead: boolean;

  @Field()
  canWrite: boolean;

  @Field()
  canUpdate: boolean;

  @Field()
  canDelete: boolean;

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
export class RoleDetailResponse {
  @Field(() => RoleDetail, { nullable: true })
  roleDetail?: RoleDetail;
}
