const sumAll = function(firstNumber, lastNumber) {
    let result = 0;
    if (typeof firstNumber !== 'number' || typeof lastNumber  !== 'number' )
        return 'ERROR';
    else if (firstNumber < 0 || lastNumber < 0 )
        return 'ERROR';
    else if (firstNumber < lastNumber) 
    {
        for ( let i = firstNumber; i <= lastNumber; i++ )
        {
            result += i;
        }
    }
    else 
    {
        for ( let i = lastNumber; i <= firstNumber; i++ )
        {
            result += i;
        }
    }
    
    return result;


};

// Do not edit below this line
module.exports = sumAll;
