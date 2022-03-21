const router = require('express').Router();
const {models:{Trainer,Pokemon,Catch}} = require('./db/db')
router.delete('/catches/:id',async(req,res,next)=>{
    try{
        const catchaction = await Catch.findByPk(req.params.id)
        await catchaction.destroy();
        res.sendStatus(204)
    }catch(err){
        next(err)
    }
})
router.delete('/pokemons/:id',async(req,res,next)=>{
    try{
        const pokemon = await Pokemon.findByPk(req.params.id)
        await pokemon.destroy();
        res.sendStatus(204)
    }catch(err){
        next(err)
    }
})
router.post('/pokemons',async(req,res,next)=>{
    try{
        const pokemon = await Pokemon.create(req.body)
        res.status(201).send(pokemon)
    }catch(err){
        next(err)
    }
})

router.get('/trainers',async(req,res,next)=>{
    try{
        const trainers = await Trainer.findAll()
        res.send(trainers)
    }catch(err){
        next(err)
    }
})
router.get('/catches',async(req,res,next)=>{
    try{
        const catches = await Catch.findAll()
        res.send(catches)
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