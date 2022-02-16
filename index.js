// //creating constructor method

// class hello {
//   constructor() {
//     console.log("Hello");
//   }
// }
// let b = new hello();

// // creating Prototype method
// class hello1 {
//   constructor() {
//     let name;
//     let age;
//     console.log("Hello");
//   }
//   callName() {
//     console.log(`Welcome ${this.name} Your age is ${25}`);
//   }
// }

// let a = new hello1();
// a.name = "Rameez Malik";
// a.age = 25;
// a.callName();

//  Another way to create Prototype method
// class hello2 {
//     constructor(name,age) {
//       this.stuName = name;
//       this.stuAge = age;
//             console.log("Hello");
//     }
//     callName() {
//       console.log(`Welcome ${this.stuName} Your age is ${this.stuAge}`);
//     }
//   }

//   let a = new hello2("Rameez Malik", 25);
//   let b = new hello2("Javeed", 30);
//   a.callName();
//   b.callName();

//   // Creating Static method
//   class hello2 {
//     constructor(name,age) {
//       this.stuName = name;
//       this.stuAge = age;
//             console.log("Hello");
//     }
//     callName() {
//       console.log(`Welcome ${this.stuName} Your age is ${this.stuAge}`);
//     }
//     static staticMethod(){ // creating static method
//         console.log("Static Method");
//     }
//   }

//   let a = new hello2("Rameez Malik", 25);
//   let b = new hello2("Javeed", 30);
//   a.callName();
//   b.callName();
//   hello2.staticMethod();

// // INheritance
// class employee {
//   constructor() {
//     console.log(`This Constructor is adopt by employee class `);
//   }
// }
// class manager extends employee {

// }
// let a = new manager();

//Usinf super(); in INheritance if both class have constructor
// class employee {
//   constructor(name) {
//     console.log(`This Constructor is adopt by employee class ${name} `);
//   }
// }
// class manager extends employee {
//   constructor(name) {
//     super(); //using super it will check if constructor have other class will .
//     console.log(`This  is  manager class Constructor: ${name} `);
//   }
// }
// let a = new manager("Rameez");

// Prototype inheritance
class employee {
    constructor(name) {
        this.empName = name;
      console.log(`Constructor Employee `);
    }
    info(){
        console.log(`Employee Name ${this.empName}`);
    }
  }
  class manager extends employee {
    info(){
        super.info(); //By this super. calling info method from main class
        console.log(`Manager Name ${this.empName}`);
      }
    }
  let a = new manager("Rameez");
  a.info();