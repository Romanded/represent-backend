
import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/client.js';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    private configService: ConfigService
  ) {
    const adapter = new PrismaPg({
      connectionString: configService.getOrThrow('COCKROACH_URI')
    });
    super({ adapter });
  }
}
