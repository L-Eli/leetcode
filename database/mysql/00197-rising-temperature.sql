# Write your MySQL query statement below
select W1.Id from Weather W1, Weather W2 where W1.Temperature > W2.Temperature and datediff(W1.RecordDate, W2.RecordDate) = 1
