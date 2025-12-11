/*
  Warnings:

  - The primary key for the `genreposterrel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `genreposterrel` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `genres` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `posters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `genreposterrel` DROP FOREIGN KEY `genreposterrel_genreId_fkey`;

-- DropForeignKey
ALTER TABLE `genreposterrel` DROP FOREIGN KEY `genreposterrel_posterId_fkey`;

-- DropForeignKey
ALTER TABLE `userratings` DROP FOREIGN KEY `userratings_posterId_fkey`;

-- DropForeignKey
ALTER TABLE `userratings` DROP FOREIGN KEY `userratings_userId_fkey`;

-- DropIndex
DROP INDEX `genreposterrel_genreId_fkey` ON `genreposterrel`;

-- DropIndex
DROP INDEX `genreposterrel_posterId_fkey` ON `genreposterrel`;

-- DropIndex
DROP INDEX `userratings_posterId_fkey` ON `userratings`;

-- DropIndex
DROP INDEX `userratings_userId_fkey` ON `userratings`;

-- AlterTable
ALTER TABLE `genreposterrel` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`genreId`, `posterId`);

-- CreateIndex
CREATE UNIQUE INDEX `genres_slug_key` ON `genres`(`slug`);

-- CreateIndex
-- CREATE UNIQUE INDEX `posters_slug_key` ON `posters`(`slug`);

-- AddForeignKey
ALTER TABLE `userratings` ADD CONSTRAINT `userratings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userratings` ADD CONSTRAINT `userratings_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genreposterrel` ADD CONSTRAINT `genreposterrel_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genreposterrel` ADD CONSTRAINT `genreposterrel_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
