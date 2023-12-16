import userdetailsTemplate from '../models/userdetailsmodels'
const express = require('express');
const router = express.Router();

router.post('/adduserdetails', (request, response) => {
    const addedUser = new userdetailsTemplate({
        firstName: "Lorem",
        lastName: "ipsum",
        email:"lorem.ipsum@dummy.com"
    })
    addedUser.save()
    .then( data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router