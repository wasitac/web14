CREATE TABLE `person` (
    `userId` VARCHAR(20) NOT NULL PRIMARY KEY,
    `userPw` TEXT NOT NULL ,
    `reservation` TEXT, --예약시간
    `reserveSeat` TEXT  --예약좌석
);


INSERT INTO `person`
(`userId`,  `userPw`)
VALUES
('myname', 'mypassword');


UPDATE person
SET
    reservation = 
WHERE userId = edcqaz19;

DROP DATABASE test;
DROP TABLE person;

SELECT *FROM person; 
SELECT name, reservation FROM person WHERE userId = edcqaz19;