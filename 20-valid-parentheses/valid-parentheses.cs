public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new Stack<char>();
        for(int i=0; i<s.Length;i++)
        {
            if(s[i]=='(' || s[i]=='[' || s[i]=='{')
            {
                stack.Push(s[i]);
            }else if (s[i] == ')' || s[i] == ']' || s[i] == '}')
            {
                if(stack.Count==0) return false;
                char ch = stack.Pop();
                if ((s[i] == ')' && ch != '(') ||
    (s[i] == ']' && ch != '[') ||
    (s[i] == '}' && ch != '{'))
{
    return false;
}
            }
        }
        return stack.Count == 0;
    }
}