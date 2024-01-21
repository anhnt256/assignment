import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MovieTaskService {
  constructor(
    private readonly prisma: PrismaService,
    private schedulerRegistry: SchedulerRegistry,
  ) {}

  private readonly logger = new Logger(MovieTaskService.name);

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: 'getMovie',
  })
  async handleCron() {
    const data = await this.prisma.movie.findMany();
    if (data.length === 0) {
      const response = await fetch('https://dummyapi.online/api/movies');
      const result = await response.json();
      await this.prisma.movie.createMany({ data: result });

      const job = this.schedulerRegistry.getCronJob('getMovie');
      job.stop();
    }
  }
}
