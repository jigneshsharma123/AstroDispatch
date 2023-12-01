const router = require('express').Router();

const {signinPage, registrationPage} = require('../controllers/user.controller');


router.get('/registrationPage',registrationPage)
router.get('/signinPage',signinPage)


module.exports = router;