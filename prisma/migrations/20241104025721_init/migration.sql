-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "collection_direction" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "destination_address" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "indications" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "town" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "scheduled_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Bulk" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "length" REAL NOT NULL,
    "height" REAL NOT NULL,
    "width" REAL NOT NULL,
    "weight_pounds" REAL NOT NULL,
    "description" TEXT NOT NULL,
    "personId" INTEGER NOT NULL,
    CONSTRAINT "Bulk_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
