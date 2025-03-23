const Customer = require('../libs/models/customer.model');

const { body, validationResult } = require('express-validator');

const validateCustomer = [
    body('name', 'Name must not be empty').notEmpty(),
    body('email', 'Email must not be empty').notEmpty(),
    body('phone', 'Phone field must not be empty').notEmpty(),
    body('address', 'Address field must not be empty').notEmpty(),
];

const showCustomers = async (req, res) => {
    const query = { owner: req.session.userId }; // query by session Id
    const customers = await Customer.find(query);

    res.render('pages/customers', {
        title: 'Customers',
        type: 'data', customers,
        info: req.flash('info')[0],
    });
};

module.exports = {
    showCustomers,
    validateCustomer,
};