import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma/prisma.service.js';

@Injectable()
export class DeveloperService {
  constructor(
    private prismaService: PrismaService
  ) {
  }

  findOne(id: string) {
    return this.prismaService.developer.findUnique({
      where: { id },
      include: {
        links: true,
        skills: true,
        experiences: true,
        projects: true,
      },
    })
  }

  findAll() {
    return this.prismaService.developer.findMany({
      include: {
        links: true,
        skills: true,
        experiences: true,
        projects: true,
      },
    })
  }
}
