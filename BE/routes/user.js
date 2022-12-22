const router = require("express").Router();
const ModelUser = require('../model/model_user')

router.post("/register", async(req, res) => {
    const data = await new ModelUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }) 
    console.log(data)
    const checkName =await ModelUser.findOne({name: data.name})
    const checkEmail  = await ModelUser.findOne({email: data.email})
    const checkPhone  = await ModelUser.findOne({phone: data.phone})
    if(checkName)
    {
        res.status(500).json({message: "Tai Khoan da ton tai"})

    }
    else {
        if(checkEmail)
        {
            res.status(500).json({message: "Email da ton tai"})
        }
        else {
            if(checkPhone) {
                res.status(500).json({message: "So dien thoai da ton tai"})
            }
            else {
                try {
                    const dataSave = await data.save()
                    res.status(200).json({status: 200});        
                }
                catch (error) {           
                    res.status(500).json({message: error.message})
                }
            }
          
        }
       
    }
   
} );

module.exports = router;
