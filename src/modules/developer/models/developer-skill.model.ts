import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Skill } from '../../../shared/types/developer/index.js';

@ObjectType()
export class DeveloperSkillModel {
  @Field(() => ID)
  id: string;

  @Field(() => Skill)
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
