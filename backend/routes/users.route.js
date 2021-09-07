import express from "express"
import User from "../models/user.model.js"

import bcrypt from "bcryptjs"

const router = express.Router()
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

const genHash = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync())
}

router.route('/add').post((req, res) => {
    const username = req.body.username
    const password = req.body.password

    const newUser = new User({ username, password: genHash(password) })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

export default router