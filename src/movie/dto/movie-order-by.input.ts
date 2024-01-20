import { InputType, Field } from '@nestjs/graphql';
import { SortOrder } from '@/util/sort-order';

@InputType({
  isAbstract: true,
  description: undefined,
})
class MovieOrderByInput {
  @Field(() => SortOrder, {
    nullable: true,
  })
  id?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  name?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  rating?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  dateOfPayment?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  createdAt?: SortOrder;

  @Field(() => SortOrder, {
    nullable: true,
  })
  updatedAt?: SortOrder;
}

export { MovieOrderByInput };
