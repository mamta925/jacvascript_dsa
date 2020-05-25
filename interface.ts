module test {
  interface Person {
    name: string;
    age: number;
    kid: number;
    calcPets: () =>number;
    makeYounger: (years: number) => void;
  }

  var p: Person = {
    name: "Mamta",
    age: 20,
    kid: 4,
    calcPets: function () {
      return 2;
    },
    makeYounger: function (years: number) {
      this.age -= years;
    },
  };
}
