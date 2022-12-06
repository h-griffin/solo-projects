const express = require('express');
const app = express();
const queries = require("./mysql/queries");

const url = require('url');

app.set('view engine', 'ejs');
app.listen(3000);


// get home route - query states to populate state select options
app.get('/', function(request, response) {
    queries.findStates()
        .then(result => {
            // console.log(" find states result", result)
            response.render('index', { title: 'AirBnb Search App', results: result });  
    });

});

// get cities from state to populate cities select options based on selected state
app.get('/:state', (request, response) => {
    queries.findCitiesByState(
        { 
            state_id:  request.params.state,  
        }).then(result => {
            // console.log(" find cities by state result", result);
            response.render('index', { title: 'AirBnb Search App', results: result});
        });
});

app.get('/airbnb', (request, response) => {
  response.render('airbnb', { title:'AirBnb' });
});

// get one listing from selected room count and amenities
app.get('/airbnb/find-one', (request, response) => {
 
    // get access to array of amenities prop
    const queryObject = url.parse(request.url, true).query;

    queries.findListing(
        { 
            number_rooms:  queryObject.bedrooms,  
            amenities: Object.values(queryObject)[3]
        }).then(result => {
            // console.log("find listing result", result)
            response.render("listing", { listing: result[0] });
        });
});

// get all listings matched from selected room count, state, and city
app.get ("/airbnb/find-many", async (request, response) => {
    const queryObject = url.parse(request.url, true).query;

    queries.findListings(
        { 
            bedrooms:  queryObject.bedrooms,  
            state_id:  queryObject.state,  
            city_id:  queryObject.city,  
        }).then(result => {
            // console.log("find many result", result)
            response.render("listings", { listings: result });
        });
});

// get one listing from listing id
app.get ("/airbnb/listing/:id", async (request, response) => {
    queries.findListingbyId(
        { 
            id: request.params.id,  
        }).then(result => {
            // console.log("find listing by id result", result)
            response.render("listing", { listing: result[0] });
        });
});

 