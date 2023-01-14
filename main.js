// 150 JS EXERCISES WITH SOLUTIONS

// 1 Write a JavaScript program to get the current date.

// const date = new Date();

// console.log('Today:' , date.getDay())
// console.log('Current Time Is: ' , date.getHours() , ':', date.getMinutes() , ':', date.getSeconds())

// 2 Write a JavaScript program to print the contents of the current window.

// const buttonEl = document.getElementById('print')

// buttonEl.addEventListener('click', ()=>{
//     window.print()
// })

// 3 Write a JavaScript program to get the current date.

// const date = new Date();

// console.log((date.getMonth()+1)+' : '+date.getDate()+' : '+ date.getFullYear())

// 4 Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// let a = Number(prompt('first'))
// let b = Number(prompt('second'))
// let c = Number(prompt('third'))

// let p = (a+b+c)/2

// let s = Math.pow((p*(p-a)*(p-b)*(p-c)),.5)

// console.log(s)

// ****************************************************************************************************************
// 5. Write a JavaScript program to rotate the string 'Hello World' in right direction by periodically removing one letter from the end of the string and attaching it to the front

// let element = document.getElementById("hello-world");

// function changeText() {
//   let changedElement = element.innerText;

//   // IMP
//     let impText= changedElement.slice(length - 1) + changedElement.slice(0, length - 1)

//     element.innerText =impText;

//   console.log(impText);

//   setTimeout(() => {
//     changeText()
//   }, 200);
// }

// changeText()

// ****************************************************************************************************************
// 6.Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050

// const date = new Date();
// let i

// for(i=0; i<=36; i++){
//     date.setFullYear(date.getFullYear()+1)
//     date.setDate(1)
//     date.setMonth(0)

//     if(date.getDay()==7){
//         console.log(date.getFullYear() , ':', date.getMonth(), ':', date.getDate())
//     }
// }

// ****************************************************************************************************************

// 7.Write a JavaScript program where the program takes a random integer
//  between 1 to 10, the user is then prompted to input a guess number. If the user input
//  matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// let a = Math.floor(Math.random()*10)
// let b = Number(prompt('enter'))

// if(b==a){
//     console.log('Good Work')
// }else{
//     console.log('Not matched')
// }

// ****************************************************************************************************************
//  8.Write a JavaScript program to calculate days left until next Christmas.

// let currentTime = new Date()
// let nextChristmas = new Date()

// if(currentTime.getMonth()==11 && currentTime.getDate()==25){
//     console.log('Today');
// }else if(currentTime.getMonth()==11 && currentTime.getDate()>25){
//     nextChristmas.setFullYear(currentTime.getFullYear()+1,11,25)
//     console.log(nextChristmas);
// }else{
//     nextChristmas.setFullYear(currentTime.getFullYear(),11,25)
//     console.log((nextChristmas.getTime()-currentTime.getTime())/(1000*60*60*24))

// }

// ****************************************************************************************************************
// 9. Write a JavaScript program to calculate multiplication and division of two numbers (input from user)

// let firstInput = document.getElementById('first-input')
// let secondInput = document.getElementById('second-input')

// const multiplyEl = document.getElementById('multiply')
// const divideEl = document.getElementById('divide')

// const result = document.getElementById('result')

// multiplyEl.addEventListener('click',()=>{

//     let firstValue=Number(firstInput.value)
//     let secondValue=Number(secondInput.value)

//     if(isNaN(firstValue) || isNaN(secondValue)){
//         result.innerHTML = ':-P'

//     }else{

//         result.innerHTML=(firstValue*secondValue)

//     }
// })

// divideEl.addEventListener('click',()=>{
//     let firstValue=Number(firstInput.value)
//     let secondValue=Number(secondInput.value)

//     if(isNaN(firstValue) || isNaN(secondValue)){
//         result.innerHTML = ':-{'
//     }else if(secondValue==0){
//         result.innerHTML = '-_-'
//     }else{
//         result.innerHTML=(firstValue/secondValue)
//     }

// })

//

// ****************************************************************************************************************
// 10 Write a JavaScript program to get the website URL (loading page).

// console.log(document.URL)

// ****************************************************************************************************************
// 11Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// let value = prompt('...')

// if(value.slice(0,2).toLocaleLowerCase()=='py'){
//     console.log(value);
// }else{
//      console.log('py'.concat(value))
// }

// ****************************************************************************************************************
//12 Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// let word = prompt('STRING....')
// let num = Number(prompt('NUM'))

// let finalWord = word.slice(0,num)+ word.slice(num+1,word.length)

// console.log(finalWord);

// ****************************************************************************************************************
//13 Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// let lastChar = word[word.length-1];
// let firstChar = word[0]
// let valuableWord = word.slice(1, word.length-1)
// return lastChar+valuableWord+firstChar

// let word = prompt('...')

// function changeChar(word) {
//   let lastChar = word[word.length-1];
//   let firstChar = word[0]
//   let valuableWord = word.slice(1, word.length-1)
//   return lastChar+valuableWord+firstChar
// }

// console.log(changeChar(word));

// ****************************************************************************************************************
// 14 Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

// let word = prompt('...')

// const changeWord = (word)=>{
//     if( word.length<3 ) return false
//     let lastChars = word.slice(word.length-3, word.length)

//     return (lastChars+word+lastChars)
// }

// console.log(changeWord(word))

// ****************************************************************************************************************
// 15 Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

// let word = prompt('...');

// const check = (word) => {

//   if (word.slice(0, 4).toLocaleLowerCase() != "java" || word.length<4) return false;

//   return true;
// };

// console.log(check(word))

// ****************************************************************************************************************
// 16  Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// let word = prompt();

// const checkWord = (word) => {
        
//   let index = word.indexOf("script");

//   if (index == 4) return word.slice(0, index);

//    return word;
// };

// console.log(checkWord(word));


// ****************************************************************************************************************
// 17  Write a JavaScript program to find the largest of three given integers


// let a = Number(prompt('first'));
// let b = Number(prompt('second'));
// let c = Number(prompt('third'));

// const checkNumbers = (a, b , c) =>{
//     if(a>b && a>c){
//         return a;
//     }else if(b>a && b>c){
//         return b;
//     }else if(c>a && c>b){
//         return c;
//     }    
// }


// console.log(checkNumbers(a,b,c))


// ****************************************************************************************************************
// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// let a = Number(prompt('first'));
// let b = Number(prompt('second'));

// let c = a
// let d = b

// a>100? c-= 100: c = 100-c
// b>100? d-= 100: d= 100-d

// if(c>d){
//     console.log('second');
// }else if(d>c){
//     console.log('first')
// }else{
//     console.log('SAME');
// }

// ****************************************************************************************************************
// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.  


// let num1 = 100;
// let num2 = 70;


// const checkNumbers = (num1, num2)=>{

//     if(num1>=60 || num1<=40 || num2>=60 || num2<=40 ) return false;
    
//     if (a>b) return 'first num is greater than second one';
//     if (b>a) return 'second num is greater than first one';

// }

// console.log(checkNumbers(num1, num2))

// ****************************************************************************************************************
