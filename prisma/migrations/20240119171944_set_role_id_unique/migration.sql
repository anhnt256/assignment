/*
  Warnings:

  - A unique constraint covering the columns `[roleId]` on the table `RoleDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RoleDetail_roleId_key" ON "RoleDetail"("roleId");
