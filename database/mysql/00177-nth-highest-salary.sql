CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    DECLARE offset_n INT;
    SET offset_n = N - 1;
    RETURN (
        # Write your MySQL query statement below.
        (SELECT DISTINCT Salary FROM Employee ORDER BY Salary DESC LIMIT offset_n, 1)
    );
END
