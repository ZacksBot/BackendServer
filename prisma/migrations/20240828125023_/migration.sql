/*
  Warnings:

  - You are about to drop the column `belogstoId` on the `Product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,belogsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `belogsToId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_belogstoId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "belogstoId",
ADD COLUMN     "belogsToId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belogsToId_key" ON "Product"("id", "belogsToId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_belogsToId_fkey" FOREIGN KEY ("belogsToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
