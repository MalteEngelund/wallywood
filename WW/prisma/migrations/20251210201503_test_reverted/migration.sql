/*
  Warnings:

  - Added the required column `id` to the `genreposterrel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `genreposterrel` DROP FOREIGN KEY `genreposterrel_genreId_fkey`;

-- DropIndex
DROP INDEX `genreposterrel_genreId_key` ON `genreposterrel`;

-- AlterTable
ALTER TABLE `genreposterrel` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

