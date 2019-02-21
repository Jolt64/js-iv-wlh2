// this always refers to an object
// 'this' points to the object to the left
//    of the function that is running

// this is the global object
// console.log(this)

// function tester() {
//   console.log(this)
// }

// tester()

///////// IMPLICIT/DEFAULT BINDING ////////// 


// THIS is determined at the time of invocation
// var obj = {
//   name: 'Bob Ross',
//   age: 52,
//   sayAge() {
//     console.log(this)
//     this.age = 43
//     console.log(this)
//   }
// }

// // THIS is obj becasue that the thing to left at the moment of invocation
// // implicit binding
// obj.sayAge()

// var fn = obj.sayAge;

// // THIS is window, because that is the thing to the left at the moment of invocation
// // default binding
// fn()


///////////// EXPLICIT BINDING ////////////

// .bind, which returns a function to be run a at a later time

// .call, .apply which runs the function imediatly, and does not save a bound version

// var name = 'Todd'

// var obj = {
//   name: 'Bob Ross',
//   age: 52,
//   sayAge() {
//     console.log(this)
//     this.age = 43
//     console.log(this)
//   }
// }

// function sayName(val, other){
//   console.log(val)
//   console.log(other)
//   console.log(this.name)
// }

// // sayName()


// var boundSayName = sayName.bind(obj)

// // boundSayName()

// // console.log(this)

// // boundSayName()

// // Call C for Commas, is comma seperated
// sayName.call(obj, 'hello', 'asfsa')
// // apply A for Array, has to be the second param
// sayName.apply(obj, ['gjhghjgjh', 'jdfjjfdsjfds'])


//////////// ARROW FUNCTIONS ////////////////

// an arrow funciton, determines its THIS context, when it is declared, not run. 

// var closureExample = {
//   age: 52,
//   sayLater(message) {
//     console.log(this)
//     setTimeout(() => {
//       console.log(this)
//       console.log(message)
//     }, 1000)
//   }
// }

// closureExample.sayLater('im the message')