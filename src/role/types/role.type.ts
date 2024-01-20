import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Role {
  @Field({ nullable: true })
  id?: number;

  @Field()
  name: string;

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
export class RoleResponse {
  @Field(() => Role, { nullable: true })
  role?: Role;
}
