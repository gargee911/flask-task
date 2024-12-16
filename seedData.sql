-- SQLite
INSERT INTO Task (name, category, priority, deadline) VALUES
('Buy groceries', 'Personal', 'Medium', '2024-12-20 10:00:00'),
('Finish project report', 'Work', 'High', '2024-12-18 17:00:00'),
('Doctor appointment', 'Personal', 'High', '2024-12-19 09:00:00'),
('Team meeting preparation', 'Work', 'Medium', '2024-12-18 09:30:00'),
('Pay utility bills', 'Personal', 'Low', '2024-12-21 12:00:00'),
('Client presentation', 'Work', 'High', '2024-12-19 14:00:00'),
('Call family', 'Personal', 'Medium', '2024-12-17 20:00:00'),
('Submit tax documents', 'Work', 'High', '2024-12-22 15:00:00'),
('Read a book', 'Personal', 'Low', '2024-12-25 19:00:00'),
('Organize desk', 'Work', 'Low', '2024-12-23 11:00:00');

select * from Reminder;

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Buy groceries', 'Personal', 'Medium', '2024-12-20 08:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Meeting with client', 'Work', 'High', '2024-12-18 10:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Doctor appointment', 'Personal', 'Low', '2024-12-19 14:30:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Team call', 'Work', 'Medium', '2024-12-17 16:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Complete report', 'Work', 'High', '2024-12-22 11:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Gym session', 'Personal', 'Medium', '2024-12-20 18:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Pick up dry cleaning', 'Personal', 'Low', '2024-12-21 09:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Submit timesheet', 'Work', 'Medium', '2024-12-19 17:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Attend webinar', 'Work', 'High', '2024-12-16 13:00:00');

INSERT INTO Reminder (name, category, priority, time) 
VALUES ('Call mom', 'Personal', 'Medium', '2024-12-18 20:00:00');
