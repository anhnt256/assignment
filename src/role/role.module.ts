import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleResolver } from './role.resolver';
import { PrismaService } from '@/providers/prisma/prisma.service';

@Module({
  providers: [RoleService, RoleResolver, PrismaService],
})
export class RoleModule {}
