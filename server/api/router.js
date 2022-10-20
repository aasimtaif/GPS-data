const { createUser, getAllUsers, deleteUser, logIn, getGpsData , getGpsDataById} = require('./controller');
const { validateToken } = require('../auth/tokenValidation');
const router = require('express').Router();
// router.use(validateToken);

// public routes
router.post('/signup', createUser);
router.post('/login', logIn);

// protected routes
router.get('/users',validateToken, getAllUsers);
router.delete('/user/:id',validateToken, deleteUser);
router.get('/gps',validateToken, getGpsData);
router.get('/gps/:id',validateToken, getGpsDataById);

module.exports = router;