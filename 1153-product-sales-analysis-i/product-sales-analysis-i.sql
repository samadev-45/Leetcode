/* Write your T-SQL query statement below */
select product_name,year,price 
from Sales as s
inner join Product p
on p.product_id = s.product_id