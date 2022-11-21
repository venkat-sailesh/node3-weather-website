// 



const request = require('request')



const geocode = (address, callback) =>{

    const url = 'http://api.weatherstack.com/current?access_key=c0ad28677f350c3356056d09597fc6af&query=' + encodeURIComponent(address)

 

    request({url: url, json: true}, (error, response)=>{

     if (error){

         callback('Unable to connect to location services!', undefined)

     // } else if(response.body.error){

     //     callback('Location not found', undefined)

 

     } else{

         callback(undefined, {

             latitude: response.body.location.lat,

             longitude: response.body.location.lon,

             location: response.body.location.region

         })

     }

     

    })

 }



 module.exports = geocode