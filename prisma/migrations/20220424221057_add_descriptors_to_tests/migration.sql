/*
  Warnings:

  - Added the required column `period` to the `tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "period" INTEGER NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
