/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var prefix = strs[0]
   
    for(let word of strs){
        while(!word.startsWith(prefix)){
            prefix=prefix.slice(0,-1);
        }
        if(prefix===" ") return "";
    }
    return prefix
    
    
};