import { Resolver, Query, Args } from '@nestjs/graphql';
import { DeveloperService } from './developer.service.js';
import { DeveloperModel } from './models/developer.model.js';

@Resolver('Developer')
export class DeveloperResolver {
  constructor(private readonly developerService: DeveloperService) {}

  @Query(() => DeveloperModel, { name: 'findOneDeveloper', nullable: true })
  findOne(@Args('id') id: string) {
    return this.developerService.findOne(id);
  }

  @Query(() => [DeveloperModel], { name: 'findAllDevelopers' })
  findAll() {
    return this.developerService.findAll();
  }
}
