import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  dotenv.config();
  console.log('Seeding...');

  await prisma.$connect();

  /*********************************************************************/
  /* Dangerous zone: */
  /* Delete all tables before seeding */
  // Only uncomment these block code below if you want to delete for all existed tables

  await prisma.userRoleMap.deleteMany({});
  await prisma.roleDetail.deleteMany({});
  await prisma.role.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.movie.deleteMany({});

  /*********************************************************************/

  /* User seeding */
  const users = await prisma.user.createMany({
    data: [{
      email: 'anhnt256@gmail.com',
      password: await bcrypt.hash('12345678', 10),
      fullName: 'Anh Nguyen',
    },
      {
        email: 'anhtaidang.developer@gmail.com',
        password: await bcrypt.hash('12345678', 10),
        fullName: 'Tai Dang',
      }]
  });

  /* Role seeding */
  const roles = await prisma.role.createMany({
    data: [{
      name: "Admin"
    },
    {
      name: "User"
    }]
  });

  /* Role Detail seeding */
  const roleDetails = await prisma.roleDetail.createMany({
    data: [{
      roleId: 1,
      canRead: true,
      canWrite: true,
      canUpdate: true,
      canDelete: true
    },
    {
      roleId: 2,
      canRead: true,
      canWrite: false,
      canUpdate: false,
      canDelete: false
    }]
  });

  /* User Role map seeding */
  const userRoleMap = await prisma.userRoleMap.createMany({
    data: [{
      userId: 1,
      roleId: 1,
    },
      {
        userId: 2,
        roleId: 2,
      }]
  });

  console.log({ users, roles, roleDetails, userRoleMap });
  console.log('------------------------------------------------');
  console.log('Seeding successfully ...........................');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
