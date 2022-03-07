
// let js = 'amazing';
// // console.log(40+8+23-10);

// console.log('Jonas');
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);



// // Variable name conventions
// let PI = 3.1415;

// let myFirstJob = 'Coder';
// let myCurrentJob = 'Teacher';


// console.log(myFirstJob);


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);


// let year;

// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);



// let age; 
// age = 31; 

// const birthYear = 1999; 
// // birthYear = 2000;

// // const job;

// //old way of defining variable 
// var job = 'programmer';
// job = 'teacher';

// //very terrible idea
// // lastName = 'Khalid';
// // console.log(lastName);



// const now = 2037; 

// const ageJonas = now - 1991; 
// const ageSarah = now - 2020;

// console.log(ageJonas,ageSarah);
// console.log(ageJonas*2,ageJonas/10,2**3);
// //2**3 means 2 to the power of 3 = 2*2*2

// const firstName = 'Dyass';
// const lastName = 'Khalid';
// console.log(firstName + ' ' + lastName);


// // Assignment operators 
// let x = 10+5; // 15 
// x +=10; //x = x + 10 = 25 
// x *=4 //x = x*4 = 100 
// x++; //x = x + 1 = 101
// x--; //x = x - 1 = 100
// x--; //x = x - 1 = 99
// console.log(x);

// // Comparison operators 
// console.log(ageJonas>ageSarah); // >, < , >=, <=
// console.log(ageSarah>=18);

// const isFullAge = ageSarah>=18; 


// console.log(now-1991>now-2018);

// const now = 2037; 
// const ageJonas = now - 1991; 
// const ageSarah = now - 2018; 
// console.log(now-1991>now-2018);


// coding challenge 1 

// let markHeight;
// let johnHeight; 
// let markMass;
// let johnMass; 
// let markBMI;
// let johnBMI; 
// let markHigherBMI;


// markHeight = 1.88;
// markMass = 95;


// johnHeight = 1.76;
// johnMass = 85;


// markBMI = markMass/(markHeight**2);
// johnBMI = johnMass/(johnHeight**2);

// markHigherBMI = markBMI>johnBMI;

// if (markHigherBMI){
//     console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
// }else{
//     console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})`);
// }




// const firstName = 'Dyass';
// const job = 'teacher'
// const birthYear = 1991;
// const year = 2037 


// const dyass = "I'm " + firstName + ', a ' +  (year-birthYear) + ' years old ' + job + '.';
// console.log(dyass);

// const dyassNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}.`;
// console.log(dyassNew);

// console.log(`this is a regular string`);

// console.log(`String
// multiple
// lines`);


// const age = 15; 
// const isOldEnough = age>=18; 

// if (isOldEnough) {
//     console.log(`Dyass can start driving license`)
// }else{
//     const yearsLeft = 18-age
//     console.log(`Dyass cannot start driving. 
// He needs ${yearsLeft} years more 👀👀`)
// }


// const birthYear = 1991; 
// let century;

// if(birthYear <=2000){
//     century  = 20; 
// }else{
//     century = 21;
// }

// console.log(century);

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear)+18);
// console.log(Number('Jonas'));
// console.log(typeof NaN)
// console.log(String(23),23);

// type coercion 

// console.log('I am '+ 23 + ' years old');
// console.log('I am '+ '23' + ' years old');
// console.log('23'+'10'-10);
// console.log('23'*'2');

// let n = '1' + 1;
// n = n-1;
// console.log(n);


// 5 Falsy values 0 , '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 10; 

// if(money){
//     console.log(`Don't spent al the money`);
// }else{
//     console.log(`You should get a job`)
// }

// let height = 0; 

// if(height){
//     console.log(`yay height is defined`);
// }else{
//     console.log(`height is not defined`);
// }


// const age = '18';
// // === is strict equality operator
// if (age===18)   console.log(`You just become an adult~!! strict`);
// // == is lose strict operator


// // === is strict equality operator
// if (age==18)   console.log(`You just become an adult~!! loose`);
// // == is lose strict operator


// const favourite = Number(prompt("What's your favourite number"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite===23){
//     console.log('Cool! 23 is an amazing number');
// }else if(favourite===7){
//     console.log(`7 is a cool number as well!`);
// }else if(favourite===9){
//     console.log(`9 is a cool number as well!`);
// }else{
//     console.log(`Number is not 23 or 7`);
// }

// if(favourite!==23){
//     console.log('Why not 23?');
// }



// const hasDriversLicense = true; //A 
// const hasGoodVision = true; // B 

// console.log(hasDriversLicense&&hasGoodVision);
// console.log(hasDriversLicense||hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if (shouldDrive) console.log(`Sarah is able to drive`)
// // else console.log(`Sarah is not able to drive
// // So someone else should drive`);

// const isTired = false; //C 


// if (hasDriversLicense&&hasGoodVision&&!isTired) console.log(`Sarah is able to drive`)
// else console.log(`Sarah is not able to drive
// So someone else should drive`);


// const day = 'sunday';

// switch(day){
//     case 'monday': //day === 'monday'
//         console.log(`Plan course structure`);
//         console.log(`Go to coding meetup, Dyass!`);
//         break;
//     case 'tuesday':
//         console.log(`Prepare theory videos`);
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(`Write code examples`);
//         break;
//     case 'friday':
//         console.log(`Record videos`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Enjoy the weekend :D`)
//         break;
//     default:
//         console.log(`Not a valid day`);
// }


// if(day==='monday'){
//     console.log(`Plan course structure`);
//     console.log(`Go to coding meetup, Dyass!`);
// }else if(day==='tuesday'){
//     console.log(`Prepare theory videos`);
// }else if(day==='wednesday'|| day==='thursday'){
//     console.log(`Write code examples`);
// }else if(day==='friday'){
//     console.log(`Record videos`);
// }else if(day==='saturday'||day==='sunday'){
//     console.log(`Enjoy the weekend :D`)
// }else{
//     console.log(`Not a valid day`);
// }


// const age = 19;

// console.log(`I like to drink ${age>=18?'beer':'juice'}`);

const bill = 275; 

const tip = bill>=50 && bill<=300? bill*0.15: bill*0.10;

console.log(`The bill is ${bill}
Tip is ${tip}
Total is ${bill+tip}`);




































