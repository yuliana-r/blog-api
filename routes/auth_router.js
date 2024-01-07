const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/auth_controller');

authRouter.post('/sign-up', authController.signUp);

authRouter.post('/log-in', authController.logIn);

/* GET request for logging out */
// authRouter.get('/log-out', (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect('/');
//   });
// });

module.exports = authRouter;
