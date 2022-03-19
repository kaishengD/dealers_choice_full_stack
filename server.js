const Express = require('express')
const {db,syncAndSeed} = require('./db/db')

const app = Express();
const port = 3000;


app.get('/',async(req,res,next)=>{
    try{
        res.send('hello')
    }catch(err){
        next(err)
    }
})
const init = async()=>{
    try{
        await db.sync({force:true});
        await syncAndSeed();
        app.listen(port,()=>{
            console.log(`Listening on port:${port}`)
        })
    }catch(err){
        console.log(err)
    }
}
init();
