# Write your MySQL query statement below
# select S1.Score, case
#     when @prev_score = S1.Score then @rank
#     when @prev_score := S1.Score then @rank := @rank + 1
# end as Rank
# from Scores S1, (select @rank := 0, @prev_score := null) Temp
# order by S1.Score desc
select S1.Score, (select count(distinct S2.Score) from Scores S2 where S1.Score <= S2.Score) as Rank from Scores S1 order by S1.Score desc
