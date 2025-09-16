/* Write your T-SQL query statement below */
select distinct email from person where email in ( select email from person group by email having count(*)>1) 