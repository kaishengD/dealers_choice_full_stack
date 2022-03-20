const router = require('express').Router();
const {models:{Trainer,Pokemon,Catch}} = require('./db/db')


router.get('/trainers',async(req,res,next)=>{
    try{
        const trainers = await Trainer.findAll()
        res.send(trainers)
    }catch(err){
        next(err)
    }
})
router.get('/trainers/:id',async(req,res,next)=>{
    try{
        const catches = await Catch.findAll({
            where:{
                trainerId: req.params.id*1
            },
            include:[
                Pokemon,Trainer
            ]
        })
        res.send(catches)
    }catch(err){
        next(err)
    }
})

router.get('/pokemons',async(req,res,next)=>{
    try{
        const pokemons = await Pokemon.findAll()
        res.send(pokemons)
    }catch(err){
        next(err)
    }
})

module.exports = router;