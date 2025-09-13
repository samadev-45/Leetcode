/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq ={}
    for(let char of s)
    {
        if(freq[char]){
            freq[char]++
        }else{
            freq[char]=1;
        }
    }

    let vowels=new Set(['a','e','i','o','u'])
    let freqMaxVowel = 0
    for(let char of s){
        if(vowels.has(char)){
            freqMaxVowel = Math.max(freqMaxVowel,freq[char])
        }
    }

    let freqMaxConsonent = 0 
    for(let char of s){
        if(!vowels.has(char)){
            freqMaxConsonent = Math.max(freqMaxConsonent,freq[char])
        }

 
    }
           return freqMaxConsonent+freqMaxVowel; 
};