"use strict";
console.log("*****************************************");
console.log("The time complexity of above solution is  O(n2) and space Complexity is O(1)");
console.log("*****************************************");
/**
 * Given an unsorted array of integers, find a pair with given sum in it.
 *
The time complexity of above solution is  O(n2) and space Complexity is O(1)
 * @param arr
 * @param sum
 */
function find(arr, sum) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (sum === arr[i] + arr[j]) {
                console.log("pair [", arr[i], ",", arr[j], "]");
            }
        }
    }
}
find([8, 7, 6, 5, 4, 3, 2, 1], 8);
console.log("*****************************************");
console.log("The time complexity of above solution is  n(log(n)) and space Complexity is O(1)");
console.log("*****************************************");
/**
 * The time complexity of above solution is  n(log(n)) and space Complexity id O(1)
 * @param arr
 * @param sum
 */
function findBySorting(arr, sum) {
    arr.sort();
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        if (arr[low] + arr[high] == sum) {
            console.log("pair [", arr[low], ",", arr[high], "]");
        }
        arr[low] + arr[high] < sum ? low++ : high--;
    }
}
findBySorting([8, 7, 6, 5, 4, 3, 2, 1], 8);
/**
 * The time complexity of above solution is  O(n) and space Complexity is O(1)
 * @param arr
 * @param sum
 */
function findByHashing(arr, sum) {
    let hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (hashMap[arr[i]]) {
            console.log("pair ", [hashMap[arr[i]], arr[i]]);
        }
        else {
            hashMap[sum - arr[i]] = arr[i];
        }
    }
}
console.log("*****************************************");
console.log("The time complexity of above solution is  O(n) and space Complexity is O(1)");
console.log("*****************************************");
findByHashing([8, 7, 6, 5, 4, 3, 2, 1], 8);
//# sourceMappingURL=pairofsum.js.map