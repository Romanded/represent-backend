
import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/client.js';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(
    private configService: ConfigService
  ) {
    const pool = new Pool({
      connectionString: configService.getOrThrow('COCKROACH_URI'),
      max: 1,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 10000,
    });


    const adapter = new PrismaPg(pool);
    super({ adapter });
  }
}
