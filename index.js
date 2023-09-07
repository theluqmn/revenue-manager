const axios = require('axios');

axios.get('http://localhost:8080/roles')
    .then(function (response) {
        console.log(response.message);
    })
    .catch(function (error){
        console.log(error);
    });

axios.post('http://localhost:8080/roles', {
    "company_id":"1",
    "name":"brogrammer",
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.message);
    });