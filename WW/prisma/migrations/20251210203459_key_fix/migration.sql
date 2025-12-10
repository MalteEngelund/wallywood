-- AddForeignKey
ALTER TABLE `genreposterrel` ADD CONSTRAINT `genreposterrel_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `genres`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
