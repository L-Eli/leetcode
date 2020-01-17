# Write your MySQL query statement below
select D.Name Department, E.Name Employee, E.Salary as Salary
from Employee E
join Department D on D.Id = E.DepartmentId
where (E.DepartmentId, E.Salary) in (select DepartmentId, max(Salary) from Employee group by DepartmentId)

