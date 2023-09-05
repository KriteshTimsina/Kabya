/*
  Warnings:

  - You are about to drop the column `lyrics_id` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the `Lyrics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_lyrics_id_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "lyrics_id",
ADD COLUMN     "english_lyrics" TEXT,
ADD COLUMN     "nepali_lyrics" TEXT;

-- DropTable
DROP TABLE "Lyrics";
