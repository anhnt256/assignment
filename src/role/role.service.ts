import { BadRequestException, Injectable } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { RoleDetailDto } from './dto/role-detail.dto';
import { UserRoleMapDto } from './dto/user-role-map.dto';
import { PrismaService } from '@/providers/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(roleDto: RoleDto) {
    const existingRole = await this.prisma.role.findUnique({
      where: { name: roleDto.name },
    });
    if (existingRole) {
      throw new BadRequestException({ email: 'Role already in use' });
    }
    const role = this.prisma.role.create({
      data: {
        name: roleDto.name,
      },
    });
    return { role };
  }

  async createRoleDetail(roleDetailDto: RoleDetailDto) {
    const existingRole = await this.prisma.roleDetail.findUnique({
      where: { roleId: roleDetailDto.roleId },
    });
    if (existingRole) {
      throw new BadRequestException({ email: 'Role detail already in use' });
    }

    const { roleId, canRead, canWrite, canUpdate, canDelete } = roleDetailDto;

    const roleDetail = this.prisma.roleDetail.create({
      data: {
        roleId,
        canRead,
        canWrite,
        canUpdate,
        canDelete,
      },
    });
    return { roleDetail };
  }

  async createUserRoleMap(userRoleMapDto: UserRoleMapDto) {
    const { roleId, userId } = userRoleMapDto;
    const existingData = await this.prisma.userRoleMap.findFirst({
      where: { roleId, userId },
    });
    if (existingData) {
      throw new BadRequestException({
        email: 'User Role detail already in use',
      });
    }

    const userRoleMap = this.prisma.userRoleMap.create({
      data: {
        roleId,
        userId,
      },
    });
    return { userRoleMap };
  }
}
