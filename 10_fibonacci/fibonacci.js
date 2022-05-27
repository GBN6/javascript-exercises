const fibonacci = function(fibNumber) {
    let n1 = 0;
    let n2 = 1;
    if (fibNumber < 0 ) return "OOPS";
    if (fibNumber === 0) return 0;
    for (let i = 1; i < fibNumber; i++)
    {
        const temp = n2; // 1       // 1         // 2
        n2 = n1 + n2; // 1 = 0 + 1  // 2 = 1 + 1 // 3 = 1 + 2
        n1 = temp;  // 1            // 1         // 2
    }
    return n2;

};

// Do not edit below this line
module.exports = fibonacci;
