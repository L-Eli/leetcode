/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isUnsigned = false;
    let result = 0;
    if (x < 0) {
        x = -x;
        isUnsigned = true;
    }
    
    while (x > 0) {
        result = x % 10 + result * 10;
        x = Math.floor(x / 10);
    }
    
    if (result > Math.pow(2, 31)) {
        return 0;
    }
    
    return isUnsigned ? -result : result;
};
