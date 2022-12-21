
let express = require('express');
let app = express();
const queries = require("./mysql/queries");

const paginate = require('express-paginate');
const url = require('url');

app.set('view engine', 'ejs');
app.listen(3000);

app.use(paginate.middleware(5, 50));

// app.get("/", (request, response) => {
//   response.send("Update to use a view!");
// });

app.get('/find-by', (request, response) => {

    const queryObject = url.parse(request.url, true).query;
    var pgSize = queryObject.pageSize ? queryObject.pageSize : 5
    var pgNum =  queryObject.pageNum ? queryObject.pageNum : 1
    var skip = pgSize * pgNum;
    var countries = [], cities = [], cuisines = [];

    if (queryObject.filter && queryObject.select) {  

 
        queries.findAllFilters().then(result => {

            // filter category duplicates for filter drop downs
            result.forEach(el => { countries.push(el.country) });
            result.forEach(el => { cities.push(el.city) });
            result.forEach(el => { cuisines.push(el.cuisine) });

            queries.findRestaurantsByFilter({ 
                filter:  queryObject.filter,  
                select:  queryObject.select,  
                pageSize:  Number(pgSize),   // ensure these are typeof Number for sql query syntax
                pageNum: Number(pgNum), 
                offset: skip     
                })
                .then(result => {
                    try {
                        response.render('index', { 
                            title: `Resaurants By ${capitalizeFirstLetter(queryObject.filter)} : ${capitalizeFirstLetter(queryObject.select)} `, 
                            restaurants: result, 
            
                            countries: Array.from(new Set(countries.sort())), // sort countries[] alphabetically, create a SET{} (removes douplicates), then convert back to array[]
                            cities: Array.from(new Set(cities.sort())), 
                            cuisines: Array.from(new Set(cuisines.sort())), 
        
                            offset: skip,
                            numPages: Math.ceil(result[0].total_count / pgSize), 
                            pgSize: pgSize,
                            pgNum: pgNum
                        });  
                        
                    } catch (error) {
                        console.log(error)
                        response.render('error', { 
                            title: 'Error', 
                            error: error
                        });  
                    }
        
                });
        })
            

    } else {
        getRestaurantsNoFilter(request, response)
    }

});

app.get('/', (request, response) => {
    getRestaurantsNoFilter(request, response)
});

function getRestaurantsNoFilter(request, response) {
    const queryObject = url.parse(request.url, true).query;
    
    var pgSize = queryObject.pageSize ? queryObject.pageSize : 5
    var pgNum =  queryObject.pageNum ? queryObject.pageNum : 1
    var skip = queryObject.pageNum=1 ? 0 : pgSize * pgNum // if showing page one dont skip 
    var countries = [], cities = [], cuisines = [];

    
    queries.findAllFilters( )
        .then(result => {

            result.forEach(el => { countries.push(el.country) });
            result.forEach(el => { cities.push(el.city) });
            result.forEach(el => { cuisines.push(el.cuisine) });
            

            queries.findRestaurants({   
                pageSize:  Number(pgSize),   
                pageNum: Number(pgNum),
                offset: skip    
                })
                .then(result => {
                    try {
                        response.render('index', { 
                            title: 'All Resaurants', 
                            restaurants: result, 
            
                            countries: Array.from(new Set(countries.sort())), // sort countries[] alphabetically, create a SET{} (removes douplicates), then convert back to array[]
                            cities: Array.from(new Set(cities.sort())), 
                            cuisines: Array.from(new Set(cuisines.sort())),
        
                            offset: skip,
                            numPages: Math.ceil(result[0].total_count / pgSize), 
                            pgSize: pgSize,
                            pgNum: pgNum
                        });  
                        
                    } catch (error) {
                        console.log(error)

                        response.render('error', { 
                            title: 'Error', 
                            error: error
                        });  
                    }
        
                }); 
        });
 
}

function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
 