CREATE TABLE Yacht
(
YachtNum CHAR(2) PRIMARY KEY,
Name CHAR(15),
Type CHAR(10),
Destination CHAR(20),
Time DECIMAL(2,0),
Rent DECIMAL(5,0)
);

INSERT INTO Yacht 
VALUES
('1', 'Anne', 'Sailing', 'Americas', 5, 1000);
INSERT INTO Yacht 
VALUES
('2', 'Belle', 'Sailing', 'Caribbean', 7, 5000);
INSERT INTO Yacht 
VALUES
('3', 'Cece', 'Sailing', 'Exotics', 10, 10000);
INSERT INTO Yacht 
VALUES
('4', 'Dee', 'Sailing', 'Mediterranean', 14, 14000);

INSERT INTO Yacht 
VALUES
('5', 'Ellen', 'Powered', 'Americas', 5, 5000);
INSERT INTO Yacht 
VALUES
('6', 'Francen', 'Powered', 'Caribbean', 7, 8000);
INSERT INTO Yacht 
VALUES
('7', 'Gena', 'Powered', 'Exotics', 10, 12000);
INSERT INTO Yacht 
VALUES
('8', 'Heather', 'Powered', 'Mediterranean', 14, 16000);

INSERT INTO Yacht 
VALUES
('9', 'Ingrid', 'Crewed', 'Americas', 5, 10000);
INSERT INTO Yacht 
VALUES
('10', 'Jessy', 'Crewed', 'Caribbean', 7, 13000);
INSERT INTO Yacht 
VALUES
('11', 'Kim', 'Crewed', 'Exotics', 10, 16000);
INSERT INTO Yacht 
VALUES
('12', 'Lizzie', 'Crewed', 'Mediterranean', 14, 20000);