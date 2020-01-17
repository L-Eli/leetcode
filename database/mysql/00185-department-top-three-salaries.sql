# Write your MySQL query statement below
select D.Name Department, E.Name Employee, E.Salary Salary
from Employee E
join Department D on D.Id = E.DepartmentId
where 3 > (select count(distinct Salary) from Employee where DepartmentId = E.DepartmentId and Salary > E.Salary)
