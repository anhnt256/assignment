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
    // const currentHour = new Date().getHours();
    // cron working from 7am to 4pm, every 10 minutes
    // if (currentHour >= 7 && currentHour < 16) {
    //   this.logger.debug('Running the scheduled task');
    //   const response = await fetch('https://dummyapi.online/api/movies');
    //   const result = await response.json();
    //   console.log('result', result);
    // } else {
    //   this.logger.debug('Outside the scheduled time range');
    // }

    const response = await fetch('https://dummyapi.online/api/movies');
    const result = await response.json();
    await this.prisma.movie.createMany({ data: result });

    const job = this.schedulerRegistry.getCronJob('getMovie');
    job.stop();
  }
}
