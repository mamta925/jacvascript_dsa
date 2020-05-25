"use strict";
async function doWork() {
    let a = await hello();
    console.log(a);
}
function hello() {
    return new Promise((resolve, reject) => {
        resolve(2);
    });
}
//# sourceMappingURL=async.js.map