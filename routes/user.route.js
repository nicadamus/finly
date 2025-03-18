const express = require('express');
const router = express.Router();

const{
    getUser,
    createUser,
    deleteUser,
} = require('../controllers/user.controller');

// Map the routes to the function calls to database
router.get('/',getUser);
router.get('/create',createUser);
router.get('/delete',deleteUser);

module.exports = router;