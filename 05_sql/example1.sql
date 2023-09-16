-- Create database Employee
CREATE DATABASE Employee;

-- Create table Employee_Info with columns employee_id, employee_name,
-- emergency_contact_name, phone_number, address, city, country 
CREATE TABLE Employee_Info(
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    emergency_contact_name VARCHAR(50),
    phone_number VARCHAR(20),
    address VARCHAR(50),
    city VARCHAR(50),
    country VARCHAR(50)
    );

-- Insert values into table Employee_Info
insert into Employee_Info VALUES (1, 'John', 'Jane', '000000000000', '123 Main Street', 'New York', 'USA');
insert into Employee_Info VALUES (2, 'Jane', 'John', '000000000000', '123 Main Street', 'New York', 'USA');