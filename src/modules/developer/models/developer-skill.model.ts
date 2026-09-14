import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import type { Skill } from '../../../shared/types/developer/index.js'

@ObjectType()
export class DeveloperSkillModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  skill: Skill;

  @Field(() => Int)
  experience: number;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
