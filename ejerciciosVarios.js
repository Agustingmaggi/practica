/*let num = 42;
console.log("The answer is", num);

// Only change code below this line
var a=5;
var b=10;
var c='I am a';
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a)
console.log(b)
console.log(c)
console.log(a)


const myStr = "I am a 'double quoted' string inside 'double quotes'."
console.log(myStr) 

const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]
console.log(lastLetterOfLastName)


const threeArr = [1, 4, 6];
threeArr.pop();
console.log(threeArr)
*/

let myGlobal =10

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}