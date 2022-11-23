/*
  Warnings:

  - You are about to drop the column `productsId` on the `Categories` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_productsId_fkey";

-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "productsId";

-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "categoriesId" INTEGER;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
