/*
  Warnings:

  - The primary key for the `genreposterrel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `genreposterrel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[genreId]` on the table `genreposterrel` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `genreposterrel` DROP PRIMARY KEY,
    DROP COLUMN `id`;

-- CreateIndex
CREATE UNIQUE INDEX `genreposterrel_genreId_key` ON `genreposterrel`(`genreId`);
