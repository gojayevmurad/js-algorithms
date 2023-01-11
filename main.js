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
// let b = prompt('enter')

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
// 10Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.

