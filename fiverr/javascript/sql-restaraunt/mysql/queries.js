const mysql = require("./config.js");


function findAllFilters( ) {
    let query = `SELECT country, city, cuisine  
        FROM restaurants
        ORDER BY name ASC
        `;
    let safeQuery = mysql.functions.format(query );

    return querySql(safeQuery);
}

function findRestaurants(criteria) {
    let query = `SELECT name, country, city, cuisine , COUNT(*) OVER() as total_count
        FROM restaurants
        ORDER BY name ASC
        LIMIT ? OFFSET ?
        `;

    let safeQuery = mysql.functions.format(query, [
        criteria.pageSize,
        criteria.offset,
    ]);

    return querySql(safeQuery);
}

function findRestaurantsByFilter(criteria) {
 
    let query = `SELECT name, country, city, cuisine, COUNT(*) OVER() as total_count
        FROM restaurants 
        WHERE ?? = ?
        ORDER BY name ASC
        LIMIT ? OFFSET ?
        `;
           
    // ?? for identifiers (table), ? for values "Name"
    let safeQuery = mysql.functions.format(query, [
        criteria.filter,  
        criteria.select,
        criteria.pageSize,
        criteria.offset, 
    ]); 
    return querySql(safeQuery);
}

 

module.exports = {
    "findAllFilters": findAllFilters, 
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