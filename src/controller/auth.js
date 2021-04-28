const User = require('../models/user')

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (user) {
                return res.status(400).json({
                    message: 'User already registered.'
                })
            }

            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;

            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            });

            _user.save((error, data) => {
                if (error) {
                    return res.status(400).json({
                        message: 'Something went wrong.',
                        error: error
                    })
                }
                if (data) {
                    return res.status(201).json({
                        message: 'User Create Successfully...!'
                    })
                }
            })
        })
}

exports.signin = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec((error, user) => {
            if (error) res.status(400).json({ error: error })
            if (user) {
                if (user.authenticate(req.body.password)) {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
                    const { _id, firstName, lastName, email, role, fullName } = user
                    res.status(200).json({
                        token: token,
                        user: {
                            _id, firstName, lastName, email, role, fullName
                        }
                    })
                } else {
                    res.status(400).json({ message: 'Invalid Password.' })
                }
            } else {
                res.status(400).json({ message: 'Something went wrong.' })
            }
        })
}
