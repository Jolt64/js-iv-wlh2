// // function outer() {
// //   var x = 'a better example other than 5'
// //   function inner() {
// //     var y = x + 'tatastsa'
// //     console.log(x)
// //     console.log(y)
// //   }
// //   return inner
// // }

// // var fn = outer()

// // fn()


// function scoreKeeper(startingValue) {
//   return function() {
//     startingValue++
//     console.log(startingValue)
//   }
// }

// var teamOne = scoreKeeper(5);
// var teamTwo = scoreKeeper(1000);

// teamOne()
// teamTwo()
// teamOne()
// teamTwo()
// teamOne()
// teamTwo()
// teamOne()
// teamTwo()
// teamOne()
// teamTwo()
// teamOne()
// teamTwo()
// console.log('---------------------')

//////// MODULE PATTERN ///////


// function scoreKeeper(score) {
//   return {
//     increase() {
//       score++
//       console.log(score)
//     },
//     decrease() {
//       score--;
//       return score
//     }
//   }
// }

// var teamOne = scoreKeeper(5)

// console.log(teamOne.score)

// teamOne.increase()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.decrease()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()
// teamOne.increase()