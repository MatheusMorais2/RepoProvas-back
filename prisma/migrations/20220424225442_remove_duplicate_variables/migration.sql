/*
  Warnings:

  - You are about to drop the column `period` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `tests` table. All the data in the column will be lost.
  - Added the required column `token` to the `sessions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "token" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "tests" DROP COLUMN "period",
DROP COLUMN "type";
