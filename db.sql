CREATE TABLE `person` (
    `name` TEXT NOT NULL,
    `major` TEXT,
    `studentId` INT NOT NULL PRIMARY KEY,
    `phoneNumber` INT NOT NULL,
    `birthday` DATE,
    `userId` VARCHAR(20) NOT NULL ,
    `userPw` VARCHAR(20) NOT NULL ,
    `reservation` TIMESTAMP DEFAULT '0000-00-00 00:00:00'
);


INSERT INTO `person`
(`name`, `studentId`, `phoneNumber`, `userId`,  `userPw`)
VALUES
('이지홍', 2016010715, 01090853892, 'myname', 'mypassword');


UPDATE person
SET
    major = "cs"
WHERE sutdentId = 2016010725;

DROP DATABASE test;
DROP TABLE person;

SELECT *FROM person; 
SELECT name, reservation FROM person WHERE studentId = 2016010725;