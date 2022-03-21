const express = require('express')
const {db,syncAndSeed} = require('./db/db')
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json())
app.use('/api',require('./api'))
app.use('/dist', express.static(path.join(__dirname,'dist')));

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname,'index.html'))
   
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
