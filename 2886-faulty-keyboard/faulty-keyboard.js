/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let value = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') {
            value = value.split("").reverse().join("");
        } else {
            value += s[i];
        }
    }

    return value;
};