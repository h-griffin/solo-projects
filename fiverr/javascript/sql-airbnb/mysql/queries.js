const mysql = require("./config.js");

// queries a place and limits by amenities and number rooms
// it returns all fields from the "place" table, as well as the city name, state name, and the owner's first/last name and email
function findListing(criteria) {
    let query = `SELECT P.*, C.name as cityName, S.name as stateName, U.first_name, U.last_name, U.email  
        FROM places P
        JOIN cities C on P.city_id = C.id
        JOIN states S on S.id = C.state_id
        JOIN users U ON P.user_id = U.id

        WHERE P.id IN (
            SELECT place_id FROM place_amenity 
            WHERE amenity_id 
            IN(?)
            GROUP BY place_id
            HAVING count(place_id) >= ?
        )
        AND P.number_rooms >= ? LIMIT 1
    `;

    let safeQuery = mysql.functions.format(query, [criteria.amenities, criteria.amenities.length, criteria.number_rooms]);
    
    return querySql(safeQuery);
}

// queries a list of places and limits by the number of rooms - state - city
// it returns all fields from the "place" table, as well as the city name, state name, and the owner's first/last name and email
function findListings(criteria) {
    let query = `SELECT P.*, C.name as cityName, S.name as stateName, U.first_name, U.last_name, U.email
        FROM places P
        JOIN cities C on P.city_id = C.id
        JOIN states S on S.id = C.state_id
        JOIN users U ON P.user_id = U.id
        
        WHERE P.city_id = ?  
    `; 

    let safeQuery = mysql.functions.format(query, [ criteria.city_id ]);
 
    return querySql(safeQuery);
}

// queries a single place and filters by the listing id
// it returns all fields from the "place" table, as well as the city name, state name, the owner's first/last name and email, and the list of amenity names
function findListingbyId(criteria) {
    let query = `SELECT P.*, C.name as cityName, S.name as stateName, U.first_name, U.last_name, U.email, group_concat(PA.amenity_id) as place_amenities, group_concat(A.name) as place_amenity_names
        FROM places P
        JOIN cities C on P.city_id = C.id
        JOIN states S on S.id = C.state_id
        JOIN users U ON P.user_id = U.id
        JOIN place_amenity PA on PA.place_id = P.id
        JOIN amenities A on A.id = PA.amenity_id

        WHERE P.id  = ?
    `;

    let safeQuery = mysql.functions.format(query, [criteria.id]);
    
    return querySql(safeQuery);
}

// queries all states and cities  
// returns all states
function findStates( ) {

    let query = `SELECT id, name FROM states `;
 
    let safeQuery = mysql.functions.format(query);
    
    return querySql(safeQuery);
}

// queries a list of cities and filters by the state id
// it returns the state id, state name, city id, city name, and cities state id
function findCitiesByState(criteria) {
    let query = `SELECT S.id as state_id, S.name as state_name, C.id as city_id, C.name as city_name, C.state_id as city_state_id
        FROM cities C 
        JOIN states S on S.id = C.state_id
        WHERE C.state_id = ?

    `; 

    let safeQuery = mysql.functions.format(query, [criteria.state_id]);
    
    return querySql(safeQuery);
}

module.exports = {
    "findListing": findListing,
    "findListings": findListings,
    "findListingAmenities": findListingAmenities,
    "findListingbyId": findListingbyId,
    "findStates": findStates,
    "findCitiesByState": findCitiesByState
};


/*****************************************************************
 *        You can ignore everything below here!
 *****************************************************************/

// don't worry too much about this function! 
// it has been written to return the data from your database query
// *** it DOES NOT need modifying! ***
function querySql(sql) {
    let con = mysql.getCon();

    con.connect(function(error) {
        if (error) {
          return console.error(error);
        } 
      });

    return new Promise((resolve, reject) => {
        con.query(sql, (error, sqlResult) => {
            if(error) {
                return reject(error);
            }           

            return resolve(sqlResult);
        });

        con.end();
    });
}
