const express = require("express");
const router = express.Router();
const { create, patch, list } = require("../usecases/user.usecase");

router.get("/", async (req,res) => {
    try {
        const users = await list()
        res.json({
            success: true,
            data: users
        })
    } catch (err) {
        res.status(err.status || 500).json({
            success: false,
            message: err.message
        })
    }
})

router.post("/", async (req, res) => {
    try{
        const user = await create(req.body);
        res.status(201);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.status(err.status || 500)
        res.json({
            success: false,
            message: err.message
        })
    }
})

router.patch("/:id", async (req, res)=>{
    try{
        const userPatch = await patch(req.params.id, req.body, {returnDocument:"after"})
        if(!userPatch){
            const error = new Error("User not found")
            err.status = 404
            throw error  
        }
        res.json({
            success: true,
            data: userPatch
        })
    }catch(err){
            res.status(err.status || 500)
            res.json({
                success: false,
                message: err.message
            })
        }
    }
)

module.exports = router;