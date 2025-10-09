class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        ab = abs(x)
        st = str(ab)
        rev = st[::-1]
        cn = int(rev)
        return cn == x
        