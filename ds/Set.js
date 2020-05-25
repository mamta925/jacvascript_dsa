"use strict";
let mySet = new Set([1, 2, 3, 4, 5, 5, 5, 5, 5, 55.6, 7.5, 5, 5, 5]);
// mySet.add(1)           // Set [ 1 ]
// mySet.add(5)           // Set [ 1, 5 ]
// mySet.add(5)           // Set [ 1, 5 ]
// mySet.add('some text') // Set [ 1, 5, 'some text' ]
// mySet.add({a: 1, b: 2}) 
// let o = {a: 1, b: 2}
// mySet.add(o)
//for (let item of mySet) console.log(item);
//for (let [key, value] of mySet.entries()) console.log(key, value)
//console.log(mySet.size);
mySet.delete(1);
//console.log(mySet.size);
//only contain object
//not iterable
//no size
//garbage collected
const cat = new WeakSet();
cat.add({ "hi": "bye" });
cat.add({ "hi": "bye" });
cat.add({ "hi": "bye" });
console.log(cat);
//# sourceMappingURL=Set.js.map