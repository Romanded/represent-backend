import { Field, ID, ObjectType } from '@nestjs/graphql';
import { DeveloperProjectModel } from './developer-project.model.js';
import { DeveloperLinksModel } from './developer-links.model.js';
import { DeveloperSkillModel } from './developer-skill.model.js';
import { DeveloperExperienceModel } from './developer-experience.model.js';

@ObjectType()
export class DeveloperModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => DeveloperLinksModel, { nullable: true })
  links?: DeveloperLinksModel;

  @Field(() => [DeveloperSkillModel])
  skills: DeveloperSkillModel[];

  @Field(() => [DeveloperExperienceModel])
  experiences: DeveloperExperienceModel[];

  @Field(() => [DeveloperProjectModel])
  projects: DeveloperProjectModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
