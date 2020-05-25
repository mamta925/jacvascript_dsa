"use strict";
function zeroSumArray(arr) {
    let set = new Set();
    set.add(0);
    let sum = 0;
    //loop through the array
    for (let i = 0; i < arr.length; i++) {
        //calculate the sum of the subarrays
        sum += arr[i];
        //if sum is already there, then subarray with 0 is found
        if (set.has(sum)) {
            return true;
        }
        //Add sum to the set
        set.add(sum);
    }
    return false;
}
//# sourceMappingURL=Map.js.map