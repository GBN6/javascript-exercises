const repeatString = function(strg, nTimes) {
    let result = '';
    let i = 0;
    if (nTimes < 0)
    return 'ERROR';

    // while (i < nTimes)
    // {
    //     result += strg;
    //     i++;
    // }
    // return result;

    for (let i = 0 ; i < nTimes; i++)
    {
        result += strg;
    }
    return result; 

};

// Do not edit below this line
module.exports = repeatString;
