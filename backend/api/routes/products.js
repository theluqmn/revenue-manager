const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling get post",

    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling post request"
    });
});

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

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated product"
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted product"
    });
});

module.exports = router;