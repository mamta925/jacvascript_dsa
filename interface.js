"use strict";
var test;
(function (test) {
    var p = {
        name: "Mamta",
        age: 20,
        kid: 4,
        calcPets: function () {
            return 2;
        },
        makeYounger: function (years) {
            this.age -= years;
        },
    };
})(test || (test = {}));
//# sourceMappingURL=interface.js.map