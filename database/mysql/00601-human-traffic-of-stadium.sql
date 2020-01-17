# Write your MySQL query statement below
select S1.id, S1.date, S1.people from stadium S1, stadium S2, stadium S3 where ((S1.id + 1 = S2.id and S1.id + 2 = S3.id) or (S2.id + 1 = S1.id and S1.id + 1 = S3.id) or (S2.id + 2 = S1.id and S3.id + 1 = S1.id)) and S1.people >= 100 and S2.people >= 100 and S3.people >= 100 group by S1.date
