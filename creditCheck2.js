const { basename } = require("path");

creditCheck = function(str) {

    // ```             Example
    // Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
    // 2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
    // Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
    // Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70
    // ```
    
    base_array = [];
    multiply_array = [];
    over_ten_array = [];
    sum = 0
    
    //puts the string of numbers in an array
    for (let i = 0; i < str.length; i++){
        base_array.push(str[i]);
    }
    
    //multiplies ever other number from the second rightmost all the way left.
    for (let k = base_array.length - 1; k >= 0; k--){

        if (k === base_array.length - 1){
            multiply_array.unshift(Number(base_array[k]))
        }

        else if (k % 2 === 0){
            multiply_array.unshift(Number(base_array[k] * 2));
        }

        else {
            multiply_array.unshift(Number(base_array[k]))
        }

    }
    
    //reduces the numbers ten and over in the multiply array to a single digit
    function numReduce(num){
        let tempAdd = 0;
        for(let i = 0; i < String(num).length; i++){
            tempAdd += Number(String(num)[i]);
            if (tempAdd > 10){
                for(let i = 0; i < String(num); i++){
                    tempAdd += Number(String(num)[i]);
                }
            }
        }
        return tempAdd;
    }
    //uses the numreduce function to ensure all numbers in the multiply_array is single digit and forms a new array
    for (let m = 0; m < multiply_array.length; m++){
        if (multiply_array[m] > 9){
            over_ten_array.push(numReduce(multiply_array[m]));
        }
        else {
            over_ten_array.push(multiply_array[m])
        }
    }

    //adds all the numbers in the over_ten_array together
    for (let n = 0; n < over_ten_array.length; n++){
        sum += over_ten_array[n];
    }
    
    //validation
    if (sum % 10 === 0){
        console.log(true);
        return true
    }
    else {
        console.log(false)
        return false
    }
}
    creditCheck("5541808923795240")