const express = require('express');
const db = require('../functions/database');
const database = require('../functions/database');
const router = express.Router();

// Get request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Users were fetched"
    });
});

// Adding new users
router.post('/', (req, res, next) => {
    const user = {
        fullname: req.body.fullname,
        role: req.body.role
    };

    database(`
    INSERT INTO users (email, firstname, lastname, age)
    VALUES ('${user.email}', '${user.firstname}', '${user.lastname}', ${user.age});
    `);

    res.status(200).json({
        message: "Handling post request",
        createdProduct: user
    });
});

// Getting users with ID
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    if (id === 'special') {
        res.status(200).json({
            message: "Discovered special ID!",
            id: id
        });
    } else {
        res.status(200).json({
            message: "You passed an ID"
        });
    }
});

module.exports = router;