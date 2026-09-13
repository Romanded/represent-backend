import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeveloperLinksModel {
  @Field(() => ID)
  id: string;

  @Field(() => String, { nullable: true })
  github?: string;

  @Field(() => String, { nullable: true })
  gitlab?: string;

  @Field(() => String, { nullable: true })
  bitbucket?: string;

  @Field(() => String, { nullable: true })
  linkedin?: string;

  @Field(() => String, { nullable: true })
  hh?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
