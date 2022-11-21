// 



const request = require('request')



const forecast = (latitude, longitude, callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=c0ad28677f350c3356056d09597fc6af&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json: true}, (error, response) =>{

        if(error){

            callback('Unable to connect to weather service', undefined)

        }

        else{
 
             callback(undefined, response.body.location.localtime)

        }

    })

}



module.exports = forecast