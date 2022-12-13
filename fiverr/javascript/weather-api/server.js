
let express = require('express');
let app = express(); 

const url = require('url');
const weather = require('./weather');

app.set('view engine', 'ejs' );
app.listen(3000, console.log("server running on port 3000"));


app.get("/", (request, response) => {
    response.render('index' ); 
});

app.get("/weather", (request, response) => {

    response.render('all', {  
        title: 'Kingston, Toronto, and Ottawa 7 day forecast', 
        kingston: weather.kingston(),  
        ottawa: weather.ottawa(), 
        toronto: weather.toronto(), 
        warmestLocation: weather.warmestLocation("Sun", weather.kingston(), weather.ottawa(), weather.toronto()),
        avgTemps: [
            weather.avgTemp(weather.kingston()), 
            weather.avgTemp(weather.ottawa()), 
            weather.avgTemp(weather.toronto())
        ] 
    }); 

});

app.get("/weather/kingston", (request, response) => {
    var kingston = weather.kingston();
        
    response.render('week', {  
        title: 'Kingston 7 day forecast', 
        forecast: kingston, 
        warmestDay: weather.warmestDay(kingston.days),
        sunnyDays: weather.sunnyDays(kingston.days) 
    }); 
});

app.get("/weather/kingston/monday", (request, response) => {

    response.render('day', {  
        title: 'Kingston 1 day forecast', 
        forecast: weather.kingston() 
    }); 
});

 

 