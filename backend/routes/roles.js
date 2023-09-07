const express = require('express');
const database = require('../functions/database');
const router = express.Router();

// Get request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Roles were fetched"
    });
});

// Creating a new role
router.post('/', (req, res, next) => {
    const role = {
        company_id: req.body.company_id,
        name: req.body.name,
        rank: req.body.rank
    };

    if (role.company_id == null || role.name == null || role.rank == null) {
        // Missing arguments

        res.status(400).json({
            message: "Some arguments were invalid, the server did not proceed."
        });
    } else {
        // All pass

        database(`
        INSERT INTO roles (company_id, name, rank)
        VALUES ('${role.company_id}', '${role.name}', '${role.rank}');
        `);

        res.status(200).json({
            message: "Handling post request",
            createdProduct: role
        });
    }
});

module.exports = router;