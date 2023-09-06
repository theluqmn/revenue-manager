const axios = require('axios');

axios.get('http://localhost:8080/products')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error){
        console.log(error)
    });