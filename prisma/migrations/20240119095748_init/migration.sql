-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL,
    "movie" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "imdb_url" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" JSONB NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
