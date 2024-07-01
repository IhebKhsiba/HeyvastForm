/*
  Warnings:

  - You are about to drop the column `testsPsychotechniquesScore` on the `Candidate` table. All the data in the column will be lost.
  - Added the required column `agreabilite` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `conscience` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experience` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extraversion` to the `Candidate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nervosisme` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Candidate` DROP COLUMN `testsPsychotechniquesScore`,
    ADD COLUMN `agreabilite` DOUBLE NOT NULL,
    ADD COLUMN `conscience` DOUBLE NOT NULL,
    ADD COLUMN `experience` DOUBLE NOT NULL,
    ADD COLUMN `extraversion` DOUBLE NOT NULL,
    ADD COLUMN `nervosisme` DOUBLE NOT NULL;
