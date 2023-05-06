console.log('hello world!');

//if else condition 
let num = 69;
if(num>=90){
    console.log('You are Passed with A+ Grade');
}
else if(num>=70 && num<=89){
    console.log('You are Passed with A Grade');
}
else if(num>=50 && num<=69){
    console.log('You are Passed with B Grade');
}
else if(num>=30 && num<=49){
    console.log('You are Passed with C Grade');
}
else if(num<=29){
    console.log('You are Failed.');
}
else{
    console.log('Wrong Input');
}

//Switch Case condition

let age = 18;
switch (age) {
   case 18 : console.log('You are not eligible for driving');
   break;

   case 20 : console.log('You are eligible for driving');
   break;

   default : console.log('Wrong Input');
}

//Loops

//Print 1 to 10 using For Loop
console.log('Print 1 to 10 using for Loop');
for(i=1; i<=10; i++){
    console.log(i);
};

//Print 1 to 10 using while Loop
console.log('Print 1 to 10 using while Loop');
let x = 1;
while(x<=10){
    console.log(x);
    x++;
}; 

//Print 1 to 10 using Do while Loop
console.log('Print 1 to 10 using Do while Loop');

let y = 1;
do{
    console.log(y);
    y++;
}while(y<=10);


//Chapter 1 Practice Complete