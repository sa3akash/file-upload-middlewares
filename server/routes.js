const express = require('express');
const upload = require("./middlewares/fileUpload")
const fs = require('fs');

const router = express.Router();


router.post("/add",upload.single("image"), (req,res,next)=>{
    const {title} = req.body;
    
    if(!title){
        fs.unlink(`${appRoot}/${req.file.path}`, (err)=>{
            if(err){
              return next(err)
            }
            console.log(err);
            res.json("Error")
          })
    }else{
        res.json("Ok")
    }
})


module.exports = router;