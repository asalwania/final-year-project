-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Student" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phoneNumber" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "feesDepositeUpto" TEXT,
    "nextFeeAmount" INTEGER
);
INSERT INTO "new_Student" ("course", "dob", "email", "fatherName", "feesDepositeUpto", "id", "name", "nextFeeAmount", "phoneNumber", "year") SELECT "course", "dob", "email", "fatherName", "feesDepositeUpto", "id", "name", "nextFeeAmount", "phoneNumber", "year" FROM "Student";
DROP TABLE "Student";
ALTER TABLE "new_Student" RENAME TO "Student";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
