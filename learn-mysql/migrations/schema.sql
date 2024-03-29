/* DO NOT TOUCH OR CHANGE BELOW SQL STATEMENT */
USE learnmysql;

/* DESIGN SCHEMA FOR REQUIREMENT */

-- PART 3:
-- 여기 user 테이블 생성 SQL 구문이 있습니다. user 테이블을 참고해서, content 테이블 생성 SQL 구문을 완성하세요.

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255) not NULL,
  `email` varchar(255) not NULL
);

CREATE TABLE `content` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  -- TODO: `id`
  `title` varchar(255) not NULL,
  -- TODO: `title`
  `body` varchar(255) not NULL,
  -- TODO: `body`
  `created_at` timestamp not NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
);

-- PART 5:
-- 아래 주석을 제거하고 category, content_category, role 테이블을 만드세요.


CREATE TABLE `category` (
  `id` int primary key AUTO_INCREMENT,
  `name` varchar(255) not null
  -- TODO:
);


CREATE TABLE `content_category` (
  `id` int primary key AUTO_INCREMENT,
  `contentId` int  not null, FOREIGN KEY(`contentId`) REFERENCES `content` (`id`),
  `categoryId` int  not null, FOREIGN KEY(`categoryId`) REFERENCES `category` (`id`)
  -- TODO:
);


CREATE TABLE `role` (
  `id` int primary key AUTO_INCREMENT,
  `name` varchar(255) not null
  -- TODO:
);


ALTER TABLE `user` ADD roleId int;
ALTER TABLE `user` ADD FOREIGN KEY (`roleId`) REFERENCES `role` (`id`);
