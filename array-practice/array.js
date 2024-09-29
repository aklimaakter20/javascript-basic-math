// loop homework
// print even number between 1-100

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
   
}
// Print the even numbers between 1-100 and write the word even next to each number

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0){
        console.log((i) + " The number is even " );
    }else{
        console.log((i) + " The number is odd : ");
    }
} 
// Print the average number of ages of your class mates

let ages = [20,35,32,22,23,26,22,30,24,26,20, 34,23,24,26,]
let totalAge = ages.reduce((accumulator , currentValue) =>{
    return accumulator + currentValue
}, 0)
console.log(totalAge);
let average = totalAge / ages.length;
console.log("Average age is " + average);


// array homework:

// 1 no ans
const fruits = ["apple","banana","cherry"]
let fruits1 = fruits.toString();
console.log(typeof fruits1) ;

// 2 no ans
const array = [10,20,30,40,50]
let arraySingle = array.at(2);
console.log(arraySingle);

// 3 no ans
const arrayColor = ["red","green","blue"]
let arrayColor2 = arrayColor.join("-");
console.log(arrayColor2);

// 4 no ans
const number = [1,2,3,4,5]
 let numberNew = number.pop();
 console.log(number);

//  5 no ans
 const fruits5 = ["apple","banana"]
 fruits5.push("grape");
 console.log(fruits5);

//  6 no ans
const car = ["car","bike","bus"]
car.shift();
console.log(car);


// 7 no ans 
const riders = ["boat","ship"]
riders.splice(0, 0, "train", "plain");
console.log(riders);

// 8 no ans
const animals = ["dog","cat","bird"]
 delete animals[1];
console.log(animals);

// 9 no ans
const array7 = [1,2,3]
const array8 = [4,5,6]
let arrMerge = array7.concat(array8);
console.log(arrMerge);

// 10 no ans
const alpha = ["a","b","c","d","e","f"]
let alphabet = alpha.splice(2,2);
console.log(alpha);

// 11 no ans
const array9 = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth"]
console.log(array9[4]);

// 12 no ans
const longString = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vine", "watermelon", "yam", "zucchini", "apricot", "blackberry", "cantaloupe", "elderberry", "fennel", "grapefruit", "honey crisp", "jackfruit", "kumquat", "lime", "melon", "nectar", "olive", "peach", "pear", "plum", "pomegranate", "rhubarb", "starfruit", "tomato", "vanilla"]

let indexOf = longString.indexOf("fennel")
console.log ("The indexOf number fennel : " + " " + indexOf);

// 13 no ans
const fruitsA = ["apple","banana","cherry","date","fig"]
let fruitsB = fruitsA.pop();
console.log(fruitsA);
let fruitsC = fruitsA.pop();
console.log(fruitsA);

// 14 no ans
const animalA = ["dog","cat","fish","bird"]
let animalS = animalA.toString();
console.log(animalS);


// 15 no ans
const fruitsX = ["apple","orange","banana","grape"]
let fruitsY = fruitsX.join("-");
console.log(fruitsY);



// 16 number 
const arrayP = ["b","c","d"]
arrayP.splice(0,0,"a","b","c");
console.log(arrayP);


// 17 no ans
const numberA = [1,2,3,4,5]
let numberB = delete numberA[3];
console.log(numberA);


// 18 no ans
const numberX = [1,2,3]
const numberY = [4,5,6]
let numberZ = numberX.concat(numberY);
let numberW = numberZ.slice(0,4);

console.log(numberW);

// 19 no ans
const arrayAl = ["a","b","c","d","e"]
arrayAl.splice(1,2,"x","y");
console.log(arrayAl);


// 20 no ans
const arrayE = [10,20,30,40,50]
let arrayF = arrayE.slice(1,4);
console.log(arrayF);


// 21 no ans
const arrayN = [1,2,3,4,5]
let arrayS = arrayN.toString();
console.log(typeof(arrayS));
const arrayM = arrayS.split(" ");
console.log(arrayM);

 
// 22 no ans
const arr1 = ["a","b","c","d","e","f"]
console.log(arr1.at(0)) ;
console.log(arr1.at(5));

// 23 no ans
const fruitsR = ["apple","banana","cherry","date"]
delete fruitsR[1];
console.log(fruitsR);


// 24 no ans
const numberC = [10,20,30,40,50]
let numberD = numberC.slice(0,3);
console.log(numberD);