/*
  Warnings:

  - You are about to drop the column `message` on the `referral` table. All the data in the column will be lost.
  - You are about to drop the column `submittedAt` on the `referral` table. All the data in the column will be lost.
  - Added the required column `friendEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `friendName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `referral` DROP COLUMN `message`,
    DROP COLUMN `submittedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `friendEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `friendName` VARCHAR(191) NOT NULL;
