import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { RoleResponse } from './types/role.type';
import { RoleDetailResponse } from './types/role-detail.type';
import { RoleDetailDto } from './dto/role-detail.dto';
import { UserRoleMapDto } from './dto/user-role-map.dto';
import { UserRoleMapResponse } from './types/user-role-map.type';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => RoleResponse)
  async createRole(@Args('roleInput') roleDto: RoleDto) {
    const { role } = await this.roleService.createRole(roleDto);
    return { role };
  }

  @Mutation(() => RoleDetailResponse)
  async createRoleDetail(
    @Args('roleDetailInput') roleDetailDto: RoleDetailDto,
  ) {
    const { roleDetail } =
      await this.roleService.createRoleDetail(roleDetailDto);
    return { roleDetail };
  }

  @Mutation(() => UserRoleMapResponse)
  async createUserRoleMap(
    @Args('userRoleMapInput') userRoleMapDto: UserRoleMapDto,
  ) {
    const { userRoleMap } =
      await this.roleService.createUserRoleMap(userRoleMapDto);
    return { userRoleMap };
  }
}
