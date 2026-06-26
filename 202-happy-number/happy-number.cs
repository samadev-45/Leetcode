public class Solution {
    
        int GetSum(int n)
    {
      int sum = 0;
    while(n>0)
    {
        int num = n % 10;
        sum += num * num;
        n /= 10;
        
    }
    return sum;  
}
public bool IsHappy(int n)
{
    HashSet<int> dup = new HashSet<int>();
    while(n !=1 && !dup.Contains(n))
    {
        dup.Add(n);
     n = GetSum(n);
    }

    return n == 1;
    
}
    }
