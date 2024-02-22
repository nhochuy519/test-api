
const express = require('express')
const fs = require('fs')
const router = express.Router();



const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
 // eslint-disable-next-line node/no-unpublished-require
 } = require('../controller/userController')

// users
//router.param('id')


router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

router
    .route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

module.exports=router