const express = require('express');
const db = require('../functions/database');
const database = require('../functions/database');
const router = express.Router();

// Fetching all users from a company
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Users were fetched"
    });
});

// Adding new users
router.post('/', (req, res, next) => {
    const user = {
        company_id: req.body.company_id,
        fullname: req.body.fullname,
        role: req.body.role
    };

    database(`
    INSERT INTO users (fullname, role)
    VALUES ('${user.company_id}','${user.fullname}', '${user.role}');
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