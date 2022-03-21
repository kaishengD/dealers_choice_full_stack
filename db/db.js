const pg = require('pg')
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost/pokemon_trainers')
const {STRING, HasMany} = require('sequelize')

//define two models
const Trainer = db.define('trainers',{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

const Pokemon = db.define('pokemons',{
    name:{
        type:Sequelize.STRING,
        allowNull: false
    }
})

const Catch = db.define('catches')

Catch.belongsTo (Trainer);
Trainer.hasMany(Catch);
Catch.belongsTo (Pokemon);
Pokemon.hasMany(Catch);
const syncAndSeed = async()=>{
    await db.sync({force:true});
    const [satoshi,misty,brock] = await Promise.all(
        ['satoshi','misty','brock'].map(name=>{
            return Trainer.create({name})
        })
    )
    const [pikachu,bulbasaur,squirtle,charmander,staryu,psyduck,togepi,goldeen,starmie,geodude,bonsly,zubat] = await Promise.all(
        ['pikachu','bulbasaur','squirtle','charmander','staryu','psyduck','togepi','goldeen','starmie','geodude','bonsly','zubat'].map(name=>{
            return Pokemon.create({name})
        })
    )
    await Catch.create({trainerId:satoshi.id, pokemonId:pikachu.id}),
    await Catch.create({trainerId:satoshi.id, pokemonId:bulbasaur.id}),
    await Catch.create({trainerId:satoshi.id, pokemonId:squirtle.id}),
    await Catch.create({trainerId:satoshi.id, pokemonId:charmander.id}),
    await Catch.create({trainerId:misty.id, pokemonId:staryu.id}),
    await Catch.create({trainerId:misty.id, pokemonId:psyduck.id}),
    await Catch.create({trainerId:misty.id, pokemonId:togepi.id}),
    await Catch.create({trainerId:misty.id, pokemonId:goldeen.id}),
    await Catch.create({trainerId:misty.id, pokemonId:starmie.id}),
    await Catch.create({trainerId:brock.id, pokemonId:geodude.id}),
    await Catch.create({trainerId:brock.id, pokemonId:bonsly.id}),
    await Catch.create({trainerId:brock.id, pokemonId:zubat.id})
    console.log('data seeded')
};

module.exports = {
    models:{
        Trainer,
        Pokemon,
        Catch
    },
    db,
    syncAndSeed
}