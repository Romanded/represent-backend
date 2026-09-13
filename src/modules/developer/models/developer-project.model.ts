import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeveloperProjectModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  link: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
