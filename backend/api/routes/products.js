const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling get post"
    });
});

// Adding new product
router.post('/', (req, res, next) => {
    const product = {
        productId: req.body.name,
        productId: req.body.price
    };

    res.status(200).json({
        message: "Handling post request",
        createdProduct: product
    });
});

// Getting the product ID
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

// Update
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Updated product"
    });
});

// Delete
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: "Deleted product"
    });
});

module.exports = router;