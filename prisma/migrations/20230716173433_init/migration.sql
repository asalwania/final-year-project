-- CreateTable
CREATE TABLE "Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "feesDepositeUpto" DATETIME,
    "nextFeeAmount" INTEGER
);
