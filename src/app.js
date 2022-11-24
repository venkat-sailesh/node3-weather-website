
// const path = require('path')
// const express = require('express')
// const hbs = require('hbs')
// const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

// const app = express()
// const publicDirectoryPath = path.join(__dirname, '../public')
// const viewsPath = path.join(__dirname, '../templates/views')
// const partialsPath = path.join(__dirname, '../templates/partials')


// // Setup handlebars engine
// app.set('view engine', 'hbs')
// app.set('views',viewsPath)
// hbs.registerPartials(partialsPath)

// // Setup static directory to serve
// app.use(express.static(publicDirectoryPath))

// app.get('',(req, res) =>{
//     res.render('index', {
//         title: 'Venkat Sailesh',
//         name: 'Weatherwebsite'
//     })
// })

// app.get('/about',(req, res) =>{
//     res.render('about', {
//         title: 'Varshaa',
//         name: 'Venkat'
//     })
// })

// app.get('/help',(req, res) =>{
//     res.render('help', {
//         title: 'Ranji',
//         name: 'Idiot'
//     })
// })

// app.get('/weather', (req, res) =>{
//     if(!req.query.address){
//        return res.send({
//         error: 'You must provide an address'
//        })
//     }
//     geocode(req.query.address, (error, {latitude, longitude, location})=>{
//          if(error){
//             return res.send({
//                 error
//             })
//          }
//          forecast(latitude, longitude, (error, forecastData)=>{
//               if(error){
//                 return res.send({error})
//               }

//               res.send({
//                 forecast: forecastData,
//                 location,
//                 address: req.query.address
//               })
//          })
//     })
//     // res.send({
//     //     Location: 'Banglore',
//     //     weather: 'forecast condition',
//     //     rain: 'no',
//     //     address: req.query.address
//     // })
// })

// app.get('/products',(req, res)=>{
//     if (!req.query.search){
//         return res.send({
//             error: 'You must provide a search term'
//         })

//     }
//     console.log(req.query.search)
//         res.send({
//            products: []
//         })
// })

// app.get('/help/*',(req, res)=>{
//     res.render('404',{
//         title: '404',
//         name: 'varshaa',
//         errorMessage: 'Help article not found'
//     })
// })

// app.get('*', (req, res)=>{
//     res.render('404', {
//         title: '404',
//         name: 'Venkat',
//         errorMessage: 'Page not found'
//     })
// })

// app.listen(3000, ()=>{
//     console.log('Server is up on port 3000..')
// })




const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')


// console.log(__dirname)
//console.log(__filename)
//console.log(path.join[__dirname, '../public'])

const app = express();
const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and view location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//setup static directory
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Venkat'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'sailesh'
    })

})

//query String
app.get('/products', (req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products:[]

    })
})

//console.log(req.query)
//output - acessing API from browser
// node src/1-app.js -e js,hbs
//Server is up on port 3000
//{ search: 'games', rating: '3' }

//server
//console.log(req.query.search)
//o/p - node src/1-app.js -e js,hbs
//Server is up on port 3000
//games
//browser
//http://localhost:3000/products?search=games
//{
//"products": []
//}


app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'varshaa'
    })

})

//store(app) and generate(express)

// app.get('',(req, res) => {
//     res.send('Hello Express!')
// })

// app.get('/help',(req, res) =>{
//     res.send('Help Page')
// })
// app.get('/about',(req, res) =>{
//     res.send('about Page')
// })

//query String
app.get('/weather',(req, res) =>{
    if(!req.query.address){
        return res.send({
           error: 'You must have to provide  address'
        })
    }

    // building json http endpoint
        geocode(req.query.address,(error, {latitude, longitude, location})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })

    })

    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Bangalore',
    //     address: req.query.address
    // })
})

//browser o/p -http://localhost:3000/weather
//{
//"error": "You must an address"
//}

//2nd o/p - http://localhost:3000/weather?address=Bangalore
//{
//"forecast": "It is snowing",
//"location": "Bangalore"
//}



app.get('/help/*',(req, res)=>{
    // res.send('Help article not found')
    res.render('404',{
        title: '404',
        name: 'one',
        errorMessage:'Help article not found'
    })
})


// app.get('*',(req, res)=>{
//     res.send('My 404 page')
// })

app.get('*',(req, res)=>{
    res.render('404',{
        title: '404',
        name: 'two',
        errorMessage:'page not found'
    })
})
//app.com
//app.com/help
//app.com/about
//challenge: create a route and render a about

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//node src/1-app.js
//Server is up on port 3000