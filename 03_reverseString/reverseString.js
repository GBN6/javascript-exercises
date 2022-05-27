const reverseString = function(strg) {
    let reverseStrg = strg;
    let result = '';
    for (let i = 0; i < strg.length; i++)
    {
        // reverseStrg = strg.split('');
        // let reverseArray = reverseStrg.reverse();
        // result = reverseArray.join('');
        result = strg.split('').reverse().join('');


    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
