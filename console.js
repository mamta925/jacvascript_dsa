"use strict";
function add(num1, num2) {
    return new Promise((resolve) => {
        let sum = num1 + num2;
        resolve(sum);
    });
}
add(1, 2).then((data) => {
    console.log(data);
});
//# sourceMappingURL=console.js.map