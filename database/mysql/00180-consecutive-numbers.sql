# Write your MySQL query statement below
select L1.Num as ConsecutiveNums from Logs L1, Logs L2, Logs L3 where L1.Num = L2.Num and L2.Num = L3.Num and ((L1.Id + 1 = L2.Id and L1.Id + 2 = L3.Id) or (L1.Id - 1 = L2.Id and L1.Id + 1 = L3.Id) or (L1.Id - 2 = L2.Id and L1.Id - 1 = L3.Id)) group by L1.Num
