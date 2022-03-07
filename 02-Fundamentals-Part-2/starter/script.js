'use strict'; 

// let hasDriversLicense = false; 
// const passTest = true; 

// if (passTest) hasDriversLicense= true; 
// if (hasDriversLicense) console.log(`I can drive`);


// // const interface = 'Audio';


// function logger(){
//     console.log('My name is Dyass');
// }

// // calling / running / invoking function

// logger(23);
// logger();
// logger();

// function fruitProcessor(apples, oranges){
//     // console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and 
// ${oranges} oranges`;

//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);


// const orangeJuice = fruitProcessor(0,5)
// console.log(orangeJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);




// const age1 = calcAge1(1991);

// function calcAge1(birthYear){
//     return 2037-birthYear;
// }


// console.log(age1);


// const calcAge2 = function(birthYear){
//     return 2037-birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1,age2);

// Arrow function 

// const calcAge3 = birthYear => 2037-birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);


// const yearsUntilRetirement = (birthyear,firstName)=>{
//     const age = 2037-birthyear;
//     const retirement = 65-age; 
//     return `${firstName} retire in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991,"Dyass"));
// console.log(yearsUntilRetirement(2009,"Jonas"));

// const squareFunction = num=> num*num; 
// console.log(squareFunction(2)); 

// const addFunction = (num1,num2)=>num1+num2;
// console.log(addFunction(2,3));




// function cutFruitPieces(fruit){
//     return fruit*4; 
// }

// function fruitProcessor(apples, oranges){
//     // console.log(apples,oranges);

//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and 
// ${orangePieces} pieces of orange`;

//     return juice;
// }


// console.log(fruitProcessor(2,3));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

*/ 


// const calcAverage = (x,y,z)=> (x+y+z)/3;

// const avgDolhins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(65,54,49);

// const checkWinner = (avgDolhins,avgKoalas)=>{

//     if (avgDolhins>=2*avgKoalas){
//         console.log(`Dolphins win (avgDolhins: ${avgDolhins} vs. avgKoalas: ${avgKoalas})`);
//     } else if (avgKoalas>=2*avgDolhins){
//         console.log(`Koalas win (avgDolhins: ${avgDolhins} vs. avgKoalas: ${avgKoalas})`);
//     } else {
//         console.log(`Draw (avgDolhins: ${avgDolhins} vs. avgKoalas: ${avgKoalas})`);
//     }
// }


// checkWinner(avgDolhins,avgKoalas);



// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';


// const friends = ['Michael','Steven','Peter'];
// console.log(friends);


// // const years = new Array(1991,1984,2008,2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Maria';
// console.log(friends); 




// const firstName = 'Dyass';
// const lastName = 'Khalid';

// const dyass = [firstName,lastName,2037-1991,'coder',friends];

// console.log(dyass);

// //exercise 

// const calcAge = birthYear => 2037-birthYear;

// const years = [1991,1984,2008,2020];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);

// console.log(age1,age2,age3);

// const ages = [age1,age2,age3];
// console.log(ages)


// const friends = ['Michael','Steven','Peter'];

// // add elements
// const newLength = friends.push('Dyass');
// console.log(friends);
// console.log(newLength);

// friends.unshift('Nabeel');
// console.log(friends);

// // remove elements 

// const removedEle1 = friends.pop();
// const removedEle2 = friends.pop();
// console.log(friends);
// console.log(`Poped elements = ${removedEle1},${removedEle2}`);

// const removedEle3 = friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Michael'));

// console.log(friends.includes('Dyass'));

// friends.push('Peter');


// if (friends.includes('Peter')) console.log(`You have a friend named Peter`);




// console.log('9'-'5') // 4
// console.log('19'-'13'+'17') // 617 
// console.log('19'-'13'+17) // 23 
// console.log('123'<57) // false 
// console.log(5+6+'4'+9-4-2); // 1143

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours===1){
//     console.log('Only 1 border');
// }else if(numNeighbours>1){
//     console.log('More than 1 border in this case');
// }else{
//     console.log('No borders');
// }


// const language = prompt('What is your favourite language?');

// switch(language){
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native spearkers');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break; 
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');    
// }



// function describeCountry(country,population,capitalCity){

//     const string = `${country} has ${population} million people and its 
//     capital city is ${capitalCity}`;
//     return string;
// }

// // console.log(describeCountry('Pakistan','100','Islamabad'));
// // console.log(describeCountry('China','1000','Beijing'));
// // console.log(describeCountry('USA','500','Washington'));



function percentageofWorld1(population){

    return population/7900*100;
}

// const World1pop1 = percentageofWorld1(1441);
// const World1pop2 = percentageofWorld1(500);
// const World1pop3 = percentageofWorld1(300);

// console.log(World1pop1,World1pop2,World1pop3);

// const percentageofWorld2 = function(population){
    
//     return population/7900*100;
// } 

// const World2pop1 = percentageofWorld2(1441);
// const World2pop2 = percentageofWorld2(500);
// const World2pop3 = percentageofWorld2(300);

// console.log(World2pop1,World2pop2,World2pop3);

// const percentageofWorld3 = population=>population/7900*100;

// const World3pop1 = percentageofWorld3(1441);
// const World3pop2 = percentageofWorld3(500);
// const World3pop3 = percentageofWorld3(300);

// console.log(World3pop1,World3pop2,World3pop3);


// function describePopulation(country,population){

//     return `${country} has ${population} million people
//     which is about ${percentageofWorld1(population)}% of the world population`;
// }


// console.log(describePopulation('Pakistan',1441));




// const populations = [100,200,300,400];

// const result = populations.length===4? true:false;

// console.log(result);

// const percentages = [percentageofWorld1(populations[0]),percentageofWorld1(populations[1]),percentageofWorld1(populations[2]),percentageofWorld1(populations[3])];

// console.log(percentages);


// const neighbours = ['Pakistan','China','USA','India','Germany'];
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes('Germany')) console.log(`Probably not a central european country`);
// else console.log(`Probably a central european country`);

// neighbours[neighbours.indexOf('USA')] = 'United States of Americal';
// console.log(neighbours);


// const dyassArray = [
//     'Dyass',
//     'Khalid',
//     2037-1999,
//     'teacher',
//     ['Michael','Steven','Peter'],
// ]

// console.log(dyassArray);

// const dyass = {
//     firstName:'Dyass',
//     lastName :'Khalid',
//     age:2037-1999,
//     job:'teacher',
//     friends:['Michael','Steven','Peter'],
//     hasDriverLicense: true, 
//     calcAge: function(birthYear){

//         return 2037-birthYear;
//     }
// }; 

// console.log(dyass);


// console.log(dyass.lastName)
// console.log(dyass.job)

// console.log(dyass['firstName']);
// console.log(dyass['lastName']);

// const nameKey = 'Name';
// console.log(dyass['first'+nameKey]);
// console.log(dyass['last'+nameKey]);

// const prop = prompt(`What do you want to know about Dyass?
// 1. firstName
// 2. lastName
// 3. Age
// 4. Job
// 5. Friends`);

// if (dyass[prop]) console.log(dyass[prop]);
// else console.log(`Sorry, I don't know about ${prop}`);

// dyass.location = 'Pakistan';
// dyass['university'] = 'LUMS';

// console.log(dyass);


// // challenge 
// // Jonas has 3 friends and his best friend is calld Michael 

// console.log(`Dyass has ${dyass.friends.length} friends
// and his best friend is ${dyass.friends[0]}`);



// const dyass = {
//     firstName:'Dyass',
//     lastName :'Khalid',
//     birthYear:1999,
//     job:'teacher',
//     friends:['Michael','Steven','Peter'],
//     hasDriverLicense: true, 

//     calcAge: function(){

//         // console.log(this);

//         this.age = 2037-this.birthYear;

//         return this.age; 
//     },
//     summary:function(){

//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}
//         who has ${this.hasDriverLicense? 'a':'no'} driver license`;
//     },
// }; 


// console.log(dyass.calcAge());
// console.log(dyass.age);
// console.log(dyass.age);
// console.log(dyass.age);

// console.log(dyass.summary());

// challenge 

// "Jonas is a 46 year old teacher and he has a/no drivers license"




// const markObject = {
//     fullName:'Mark Muller',
//     mass:100,
//     height:1.69,
//     calcBMI: function(){

//         this.BMI = this.mass/(this.height**2);
//         return this.BMI;
//     },
// }

// const JohnObject = {
//     fullName:'John Smith',
//     mass:60,
//     height:1.95,
//     calcBMI: function(){
//         this.BMI = this.mass/(this.height**2);
//         return this.BMI;
//     },
// }

// if (JohnObject.calcBMI()>markObject.calcBMI()){
//     console.log(`${JohnObject.fullName} has a higher BMI of ${JohnObject.BMI}`);
// }else if(markObject.calcBMI()>JohnObject.calcBMI()){
//     console.log(`${markObject.fullName} has a higher BMI of ${markObject.BMI}`);
// }else{
//     console.log(`Both ${markObject.fullName} and ${JohnObject.fullName} have the same BMI of ${markObject.BMI}`);
// }



// for(let i=1;i<=10;i++){
//     console.log(`Lifting weights repetition ${i}`);
// }




// const dyass = [
//     'Dyass',
//     'Khalid',
//     2037-1999,
//     'teacher',
//     ['Michael','Steven','Peter'],
//     true, 
// ]; 

// const types = [];

// for(let i=0;i<dyass.length;i++){
    
//     console.log(dyass[i],typeof dyass[i]);

//     types.push(typeof dyass[i]);
// }

// console.log(types)

// const years = [1991,2007,1969,2020]; 
// const calcAge = birthYear => 2022-birthYear;
// const ages = []

// for(let i=0;i<years.length;i++){
//     ages.push(calcAge(years[i]));
// }

// console.log(ages);

// continue and break 

// const dyass = [
//     'Dyass',
//     'Khalid',
//     2037-1999,
//     'teacher',
//     ['Michael','Steven','Peter'],
// ]; 



// for(let i = dyass.length-1;i>=0;i--){
//     console.log(dyass[i]);
// }

// for(let exercise = 1;exercise<4;exercise++){

//     console.log(`For ------- Starting exercise ${exercise} --------`);
// }


// let exercise = 1;
// while(exercise<=10){
//     console.log(`While ------- Starting exercise ${exercise} --------`);
//     exercise++;
// }

// let dice = Math.trunc(Math.random()*6)+1;

// while(dice!==6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random()*6)+1;
// }

// console.log(`Game ended, rolled a 6`);




// const bills = [22,295,176,440,37,105,10,1100,86,52]; 

// const tips = [];
// const totals = [];



