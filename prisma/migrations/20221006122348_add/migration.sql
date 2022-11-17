/*
  Warnings:

  - Added the required column `model` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "model" TEXT NOT NULL;
