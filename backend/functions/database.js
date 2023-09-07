const { Client } = require('pg');

const db = require("./db_details.json");

const client = new Client(db);
client.connect();

function database(dbquery,end) {
    client.query(dbquery, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Query action successful!")
        client.end()
    });
}

module.exports = database