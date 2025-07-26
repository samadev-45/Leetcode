/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
   const q=s.trim().split(' ')
   const t = q[q.length-1].length
   return t;
    
};