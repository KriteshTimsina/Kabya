/*
  Warnings:

  - You are about to drop the column `artistId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `lyricsEnglish` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `lyricsNepali` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeUrl` on the `Song` table. All the data in the column will be lost.
  - Added the required column `artist_id` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lyrics_id` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `duration` on the `Song` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_artistId_fkey";

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "artistId",
DROP COLUMN "lyricsEnglish",
DROP COLUMN "lyricsNepali",
DROP COLUMN "youtubeUrl",
ADD COLUMN     "artist_id" INTEGER NOT NULL,
ADD COLUMN     "lyrics_id" INTEGER NOT NULL,
ADD COLUMN     "youtube_url" TEXT,
DROP COLUMN "duration",
ADD COLUMN     "duration" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Lyrics" (
    "id" SERIAL NOT NULL,
    "nepali" TEXT NOT NULL,
    "english" TEXT NOT NULL,

    CONSTRAINT "Lyrics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_lyrics_id_fkey" FOREIGN KEY ("lyrics_id") REFERENCES "Lyrics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_artist_id_fkey" FOREIGN KEY ("artist_id") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
