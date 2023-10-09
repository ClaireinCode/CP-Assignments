exports.creditCheck = function(str) {

// ```
// Account identifier:    5   5   4   1   8   0   8   9   2   3   7   9   5   2   4   0
// 2x every other digit:  10  5   8   1   16  0   16  9   4   3   14  9   10  2   8   0
// Summed digits over 10: 1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0
// Results summed:        1   5   8   1   7   0   7   9   4   3   5   9   1   2   8   0 = 70
// ```

base_array = [];
multiply_array = [];
over_ten_array = [];
sum = 0

for (let i = 0; i < str.length; i++){
    str[i].push(base_array);
    console.log(base_array)
}
}
creditCheck("5541808923795240")