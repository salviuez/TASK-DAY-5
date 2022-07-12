//1. FIND ODD NUMBERS IN ARRAY BY USING ANONYMOUS FUNCTION.
var odds = (numbers) => {
    let findodd = numbers.filter( n => n%2);
    return (findodd);
}
console.log(odds([21,22,23,24,25,26,27,28,29]));

// // // 2.CONVERT ALL THE STRING TO THE TITLE CAPS IN A STRING ARRAY USING ANONYMOUS FUNCTION.

var words = (string) => {

    let newstring = string.split(' ').map(i => i[0].toUpperCase() + i.substring(1).toLowerCase()).join(' ');
    return (newstring);
}
console.log(words("arun will become a software developer"));

// // // 3.SUM OF ALL NUMBER IN A ARRAY USING ANONYMOUS FUNCTION

var sum = (numbers) => {

    let i = 0;
    for(let number of numbers){
       i = i + number;
      
    }
     return(i);
}

console.log(sum([1,2,3,4,5,6,7]));


// // // 4. RETURN ALL THE PRIME NUMBERS IN AN ARRAY USING ANONYMOUS FUNCTION.



// let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let result = [];
// var gotprime =  (num) => {
//   if(num < 2) return false;

//   for (let k = 2; k < num; k++){
//     if(num % k == 0){
//       return false;
//     }
//   }
//   return true;
// }
// num.forEach(function (element) {
//   const item = gotprime(element);
//   if (item) {
//     result.push(element);
//   }
// });
// console.log(result);

// // // 5. RETURN ALL THE PALINDROMES USING ANONYMOUS FUNCTION.


var isPalindrome = (str) => {
  str = str.replace(/\W/g, '').toLowerCase();
  return (str == str.split('').reverse().join(''));
}

console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("racecar"));                 // logs 'true'


// // // 6. REMOVE DUPLICATES FROM AN ARRAY USING ANONYMOUS FUNCTION:


   // var unique = ;
 
    var getone =  (unique) => {
        let one =  unique.filter((item,
            index) => unique.indexOf(item) === index);
            return one;
    }
 
    console.log(getone(['Arun','Will', 'Become', 'A', 'Software developer', 'Arun','Will', 'Become', 'A', 'Software developer']));

// 7.Return an array by k times.

    //Anonymous Function
    
     var rotateRight = (arr) => {
      let last = arr.pop();
      arr.unshift(last);
      return arr;
    }
    console.log(rotateRight([1,2,3,4,5])); 