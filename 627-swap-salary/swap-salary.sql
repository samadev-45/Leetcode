/* Write your T-SQL query statement below */
Update Salary
set sex=CASE sex
when 'm' then 'f'
else 'm'
end;