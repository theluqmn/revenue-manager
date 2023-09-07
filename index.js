const axios = require('axios');

axios.get('http://localhost:8080/products')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error){
        console.log(error)
    });

axios.post('http://localhost:8080/users', {
    "email": "lookman@gmail.com",
    "firstname": "look",
    "lastname": "man",
    "age": "119"
})
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });