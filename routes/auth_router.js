let express = require('express');
let authRouter = express.Router();

const authController = require('../controllers/auth_controller');

authRouter.get('/', authController.index);

authRouter.get('/sign-up', authController.sign_up_form_get);

authRouter.get('/log-in', authController.log_in_form_get);

/* GET request for logging out */
authRouter.get('/log-out', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = authRouter;
