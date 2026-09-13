import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service.js';
import { DeveloperResolver } from './developer.resolver.js';

@Module({
  providers: [DeveloperResolver, DeveloperService],
})
export class DeveloperModule {}
