const express = require('express');
const router = express.Router()
const usersService = require('../sevice/users')
const UserServices = new usersService();


//homepage
router.get('/',async(req,res)=>{
    res.send("welcome to Homepage :)")
})


// post user data
router.post('/userPost', async(req, res) => {
    await UserServices.create(req.body).then((data) => {
        res.send({"Success":"details register successfully"});
    }).catch((error) => {
        console.log(error);
    })
})

//get users data
router.get('/user',async(req,res)=>{
    await UserServices.findAll().then((data)=>{
        console.log(data,'router data');
        res.send(data)
    }).catch((error)=>{
        console.log(error);

    })

})
//get user data by Id
router.get('/user/:id',async(req,res)=>{
    const userId = req.params.userId
    await UserServices.findAll(userId).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
})

// Update user data
router.put('/userUpdate/:id', async(req, res)=> {
    const userId = req.params.id;
    await UserServices.userUpdate(userId, req.body).then((data) => {
        console.log(data, "data");
        if (data > 0) {
            res.send({"success": `Id ${userId} details updated`});
        } else {
            res.send({"sorry": `Id ${userId} not found!`});
        }
    }).catch((err) => {
        res.send(err);
    })
});

//delete user data

router.delete('/userDelete/:id',async(req,res)=>{
    const userId = req.params.id;
    await UserServices.deleteById(userId).then((data)=>{
        console.log(data,"data d");
        if (data>0){
            res.send({"successfully": `Id ${userId} deleted:)`})
        }else{
            res.send(`Id ${userId} is not found`)
        }
    }).catch((error)=>{
        res.send(error)
    })

})

module.exports = router