-- CreateTable
CREATE TABLE "Song" (
    "id" SERIAL NOT NULL,
    "track" TEXT NOT NULL,
    "artistId" INTEGER NOT NULL,
    "lyricsNepali" TEXT,
    "lyricsEnglish" TEXT,
    "youtubeUrl" TEXT,
    "duration" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Song_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Artist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Artist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
