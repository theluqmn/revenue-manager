const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'revenuemanager',
    password: 'luqman4g',
    port: 6969
});
client.connect();

function database(dbquery,end) {
    client.query(dbquery, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Query action successful!")
        client.end()
    });
}

module.exports = database