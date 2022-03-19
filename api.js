const router = require('express').Router();
const {models:{Trainer,Pokemon}} = require('./db/db')


router.get('/trainers',async(req,res,next)=>{
    try{
        const trainers = await Trainer.findAll()
        res.send(trainers)
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