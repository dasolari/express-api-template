-- CreateTable
CREATE TABLE "Hello" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);
