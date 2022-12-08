const mysql = require("./config.js");


function findRestaurants() {
    let query = `SELECT name, country, city, cuisine 
        FROM restaurants
        ORDER BY name ASC`;

    let safeQuery = mysql.functions.format(query);
    return querySql(safeQuery);
}

function findRestaurantsByFilter(criteria) {
    let query = `SELECT name, country, city, cuisine 
        FROM restaurants 
        WHERE ?? = ?
        ORDER BY name ASC`; 

    // ?? for identifiers (table), ? for values "Name"
    let safeQuery = mysql.functions.format(query, [criteria.filter,  criteria.select]); 
    return querySql(safeQuery);
}

 

module.exports = {
    "findRestaurants": findRestaurants, 
    "findRestaurantsByFilter": findRestaurantsByFilter, 
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