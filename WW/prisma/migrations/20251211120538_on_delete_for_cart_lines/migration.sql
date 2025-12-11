/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `posters` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `cartlines` DROP FOREIGN KEY `cartlines_posterId_fkey`;

-- DropForeignKey
ALTER TABLE `cartlines` DROP FOREIGN KEY `cartlines_userId_fkey`;

-- DropIndex
DROP INDEX `cartlines_posterId_fkey` ON `cartlines`;

-- DropIndex
DROP INDEX `cartlines_userId_fkey` ON `cartlines`;

-- CreateIndex
-- CREATE UNIQUE INDEX `posters_slug_key` ON `posters`(`slug`);

-- AddForeignKey
ALTER TABLE `cartlines` ADD CONSTRAINT `cartlines_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartlines` ADD CONSTRAINT `cartlines_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
