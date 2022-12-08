
let express = require('express');
let app = express();
const queries = require("./mysql/queries");

const url = require('url');

app.set('view engine', 'ejs');
app.listen(3000);


// app.get("/", (request, response) => {
//   response.send("Update to use a view!");
// });

app.get('/find-by', (request, response) => {

    const queryObject = url.parse(request.url, true).query;

    if (queryObject.filter && queryObject.select) {        
        queries.findRestaurantsByFilter({ 
            filter:  queryObject.filter,  
            select:  queryObject.select  
            })
            .then(result => {
                // filter category duplicates for filter drop downs
                var countries = [], cities = [], cuisines = [];
                result.forEach(el => { countries.push(el.country) });
                result.forEach(el => { cities.push(el.city) });
                result.forEach(el => { cuisines.push(el.cuisine) });
     
                response.render('index', { 
                    title: `Resaurants By ${capitalizeFirstLetter(queryObject.filter)} `, 
                    restaurants: result, 
    
                    countries: Array.from(new Set(countries.sort())), // sort countries[] alphabetically, create a SET{} (removes douplicates), then convert back to array[]
                    cities: Array.from(new Set(cities.sort())), 
                    cuisines: Array.from(new Set(cuisines.sort())), 
                });  
            });
    } else {
        queries.findRestaurants()
        .then(result => {

            // filter category duplicates for filter drop downs
            var countries = [], cities = [], cuisines = [];
            result.forEach(el => { countries.push(el.country) });
            result.forEach(el => { cities.push(el.city) });
            result.forEach(el => { cuisines.push(el.cuisine) });

            response.render('index', { 
                title: 'Resaurants', 
                restaurants: result, 

                countries: Array.from(new Set(countries.sort())), // sort countries[] alphabetically, create a SET{} (removes douplicates), then convert back to array[]
                cities: Array.from(new Set(cities.sort())), 
                cuisines: Array.from(new Set(cuisines.sort())), 
            });  
        });
    }

});

app.get('/', (request, response) => {
    queries.findRestaurants()
        .then(result => {

            // filter category duplicates for filter drop downs
            var countries = [], cities = [], cuisines = [];
            result.forEach(el => { countries.push(el.country) });
            result.forEach(el => { cities.push(el.city) });
            result.forEach(el => { cuisines.push(el.cuisine) });

            response.render('index', { 
                title: 'Resaurants', 
                restaurants: result, 

                countries: Array.from(new Set(countries.sort())), // sort countries[] alphabetically, create a SET{} (removes douplicates), then convert back to array[]
                cities: Array.from(new Set(cities.sort())), 
                cuisines: Array.from(new Set(cuisines.sort())), 
            });  
        });
});

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
 