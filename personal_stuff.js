function promise(value) {}

function sum(x) {
  if (arguments.length == 2) {
    console.log(arguments[0] + arguments[1]);
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      console.log(x + y);
      return x + y;
    };
  }
}
function palindrome(str) {
  str = str.replace(/\W/g, ``).toLowerCase();
  return str == str.split(``).reverse().join(``);
}

function multiply(x, y) {
  if (arguments.length === 0) throw error;
  else return true;
}

function formatDate(userDate) {
  userDate = new Date(userDate);
  y = userDate.getFullYear().toString();
  m = (userDate.getMonth() + 1).toString();
  d = userDate.getDate().toString();
  if (m.length == 1) m = "0" + m;
  if (d.length == 1) d = "0" + d;
  return y + m + d;
}

function createCheckDigit(membershipId) {
  let arr1 = membershipId.split("");
  let sum = 0;
  let checkDigit = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += parseInt(arr1[i]);
  }
  console.log(sum);
  let arr2 = sum.toString().split("");
  sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum += parseInt(arr2[i]);
  }

  return sum;
}

/*var globalVar = "abc";
// Parent self invoking function
(function outerFunction (outerArg) { // begin of scope outerFunction
// Variable declared in outerFunction function scope
var outerFuncVar = "x";
// Closure self-invoking function
(function innerFunction (innerArg) { // begin of scope innerFunction
// variable declared in innerFunction function scope
var innerFuncVar = "y";
console.log(
"outerArg = " + outerArg + "\n" +
"outerFuncVar = " + outerFuncVar + "\n" +
"innerArg = " + innerArg + "\n" +
"innerFuncVar = " + innerFuncVar + "\n" +
"globalVar = " + globalVar);
}// end of scope innerFunction
)(5); // Pass 5 as parameter
}// end of scope outerFunction 
)(7); // Pass 7 as parameter*/

//(function memes(meme){console.log(meme)})("COLA");

function multiplyWithoutArithmetic(x, y){
    let res = Math.imul(x,y);
     return res;
 }

 function countRepeatedWords(str){
    str = str.split(' ');
    for(i=0; i< str.length; i++){

    }



    return str;
 }

 //console.log(countRepeatedWords("Pabla la cama la mamaria"));
 words="Hey I am a am begginer am"

 function countRepeatedWords(sentence) {
    let words = sentence.split(" ");
    let wordMap = {};
  
    for (let i = 0; i < words.length; i++) {
      let currentWordCount = wordMap[words[i]];
      let count = currentWordCount ? currentWordCount : 0;
      wordMap[words[i]] = count + 1;
    }
    return wordMap;
  }
  
  //console.log(countRepeatedWords(words));
 




    //let stringer = "How do you do the do"
  //console.log(findMostRepeatedWord("La nota la es una de las notas que la maestra dejó")); 

function findMostRepeatedWord(str) 
{ 
  //let words = str.match(/\w+/g); // regex usage...
  let argumentz = str.split(" "); 
  let occurances = {}; 
  for (let word of argumentz) { 
    if (occurances[word]) { 
      occurances[word]++; 
    } 
    else { 
      occurances[word] = 1; 
    } 
  } 

  let max = 0; 
  let mostRepeatedWord = ''; 
  for (let word of argumentz) { 
    if (occurances[word] > max) 
    { 
      max = occurances[word]; mostRepeatedWord = word; 
    } 
  } 
  return { mostRepeatedWord: mostRepeatedWord, times: occurances};
}






function countRepeatedWords(args){
    let argumentz = args.split(" ");
    let obj = {};
    for(let arg of argumentz){
        if(obj[arg]){
            obj[arg]++;
            console.log
        }else{
            obj[arg] = 1;
        }
    }
    let times = 0;
    let mostRepeated = "";
    for (let arg of argumentz){
        if(obj[arg] > times){
            times = obj[arg];
            mostRepeated = arg;
        }
    }
    return { mostRepeatedWord: mostRepeated, times: times }; 
}
 
//console.log(countRepeatedWords("La nota la es una de las notas que la maestra dejó"));




function birth(...args){
    let arg = args.split("");
    
}

//console.log(birth(4,5,4,1,3,5));





function birthdayCands(...args){
    let obj = {};
    for(let arg of args){
        if(obj[arg]){
            obj[arg]++;
            console.log(obj)
        }else{
            obj[arg] = 1;
        }
    }
    let times = 0;
    for (let arg of args){
        if(obj[arg] > times){
            times = obj[arg];
        }
    }
    return { times: times }; 
}
function reorder(...args){
    let o = {}
    let noa = {
        noa: "Feeling good",
        nao: "Feeling bad",
        noa: "Joputa"
    }
    for(let a of args){
      o[a] +=1;
       }
       
       
       
       console.log(o)
    }
    
//reorder("Juanito", "Perenganito", "Juanito", "Diosdado", "Juanito");



/*const foo = (a,b) => a*b;
console.log(foo(2,2));

let ob1 = { value: 10 }
let ob2 = ob1;
let ob3 = { value: 10 }*/

/*const fu = undefined;
var bar = 120;
fu = bar +10;
console.log(fu);*/

/*var arr = [9,8,7,6,5,4,3,2,1];
let acum = -1;
for(let j=0; j<= arr.length; j++){
  (acum += arr[j] % 3 === 0) ? foo[j]: 0
}
console.log(acum);*/

/*let fuck = 10;
while(fuck--  > 0){
  console.log(fuck)
}*/

/*let days = ["M","T","W","TH","FR","S","SD"];
days.pop()//days.push(days.pop())
console.log(days);*/

var o = {p: 21, q: 13}
var {p,q} = o;

console.log(p+q);


