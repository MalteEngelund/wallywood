-- AlterTable
ALTER TABLE `users` MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `cartlines` ADD CONSTRAINT `cartlines_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `cartlines` ADD CONSTRAINT `cartlines_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userratings` ADD CONSTRAINT `userratings_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userratings` ADD CONSTRAINT `userratings_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genreposterrel` ADD CONSTRAINT `genreposterrel_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `genreposterrel` ADD CONSTRAINT `genreposterrel_posterId_fkey` FOREIGN KEY (`posterId`) REFERENCES `posters`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
