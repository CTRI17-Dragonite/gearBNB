

--@block

CREATE TABLE Users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(25) NOT NULL UNIQUE,
    user_password_hash VARCHAR(64) NOT NULL UNIQUE,
    zipcode VARCHAR(10),
    listed_items INT
);

--@block

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'


--@block

ALTER TABLE Items
ADD picture_id INT,
ADD CONSTRAINT fk_picture_id
FOREIGN KEY (picture_id) REFERENCES PICTURES(id);

--@block

CREATE TABLE Items(
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    item_name VARCHAR(50),
    item_price FLOAT CHECK (item_price >= 0), 
    item_size INT CHECK (item_size > 0 AND item_size < 5),
    item_description TEXT,
    item_tags INT,
    item_isRented BOOLEAN,
    picture_id INT
);

--@block

INSERT INTO Users (user_name, user_password_hash, zipcode)
VALUES ('Arianna', '41214NN4', '90210')