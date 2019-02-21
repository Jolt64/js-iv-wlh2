// object oriented programming language, means we attach functions to objects.

// functional programming, we have functions, that get an object passed into it.

// we can run the same funciton on an object, by always using dot notation

// a constructor function, makes objects.
// its a template to make objects.
// Classes are Constructor functions.

// prototype
// __proto__

function People(age) {
  this.age = age;
}
People.prototype.growOlder = function() {
  this.age++
  return 52
}

// class People {
//   constructor(age) {
//     this.age = age
//   }

//   growOlder() {
//     this.age++
//     console.log(this.age)
//   }
// }

// console.log(People.prototype)



// var todd = new People(20);

// console.log(todd)

// todd.growOlder = function() {
//   console.log('im going to never land, so no')
// }


// todd.growOlder()

// console.log(todd)

// String.prototype.reverse = function() {
//   return this.split('').reverse('').join('')
// }
