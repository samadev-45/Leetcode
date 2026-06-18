public class Solution {
     public int MajorityElement(int[] nums)
    {
        Dictionary<int, int> dict = new Dictionary<int,int>();
        for(int i=0;i<nums.Length; i++)
        {
            if(dict.ContainsKey(nums[i])){
                
                dict[nums[i]]++;
                
            }
            else{
            dict[nums[i]] = 1;
            }
            if(dict[nums[i]] >(nums.Length)/2) return nums[i];
        }
       return -1; 
    }

}