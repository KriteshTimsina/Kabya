/*
  Warnings:

  - You are about to drop the column `english_lyrics` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `nepali_lyrics` on the `Song` table. All the data in the column will be lost.
  - Added the required column `lyrics` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Song" DROP COLUMN "english_lyrics",
DROP COLUMN "nepali_lyrics",
ADD COLUMN     "lyrics" JSONB NOT NULL;
