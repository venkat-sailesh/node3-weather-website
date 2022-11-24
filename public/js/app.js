// // 

// //const { response } = require("express")

// console.log('Client side javascript file is loaded!')

// // fetch('http://puzzle.mead.io/puzzle').then((response) => {
// //     response.json().then((data) => {
// //         console.log(data)
// //     })
// // })

// // fetch('http://localhost:3000/weather?address=Bangalore').then((response) => {
// //      response.json().then((data) => {
// //         if(data.error){
// //             console.log(data.error)
           
// //         } else {
// //             console.log(data.location)
// //             console.log(data.forecast)
// //         }
       
// //      })
// //  })

// //  const weatherform = document.querySelector('form')
// //  const search = document.querySelector('input')
// const messageOne = document.querySelector('#message-1')
// const messageTwo = document.querySelector('#message-2')



// function click(){
//     console.log('click');
//     document.getElementById('search').addEventListener('click', (e)=>{
//     e.preventDefault()

//     let location = document.getElementById('locat').value
//     console.log(location);
//     messageOne.textContent = 'Loading....'
//     messageTwo.textContent = ''
   
//     fetch('http://localhost:3000/weather?address='+location).then((response) => {
//      response.json().then((data) => {
//         if(data.error){
//             messageOne.textContent = data.error
//             // console.log(data.error)
           
//         } else {
//             messageOne.textContent = data.location
//             messageTwo.textContent = data.forecast
//             console.log(data.location)
//             console.log(data.forecast)
//         }
       
//      })
//  })

//  })
// }
// click()

// //challenge // use input value to get weather
// // migrate fetch call into submit callback
// //use search text as the address query string value
// //submit the form with a valid and invalid to test

// //PS C:\Users\32928\Desktop\node u\notes-app\web-server> node src/1-app.js      
// //Server is up on port 3000




// console.log('client side javascript file is loaded')


//fetch concept
//default linkk
//puzzle.mead.io/puzzle
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

//search form method
const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.getElementById('message-1')
const messagetwo=document.getElementById('message-2')
const messageThree=document.getElementById('message-3')
// messageOne.textContent="Loading...."
// messagetwo.textContent=""
// messageOne.textContent="Loading...."
// messagetwo.textContent=" "

console.log(messageOne.textContent)
console.log(messagetwo.textContent)

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    messageOne.textContent="Loading...."
messagetwo.textContent=""
    //  console.log(loaction)
fetch('http://localhost:3000/weather?address=' +  location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
          messageOne.textContent=data.error
        }
        else{
            messageOne.textContent=data.location
            messagetwo.textContent=data.forecast.loc
            messageThree.textContent=data.forecast.tem
            console.log(data.location)
            console.log(data.forecast.tem)
        }
    })
    })
})

