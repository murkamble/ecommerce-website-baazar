const express = require('express')
const router = express.Router();
const { signup, signin, requireSignin } = require('../controller/auth');

router.post('/signup', signup)
router.post('/signin', signin)

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ message: 'profile' })
// })

module.exports = router;