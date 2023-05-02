const express =require ('express');
const cors =require("cors");
const app=express();
app.use(cors());
const port = process.env.PORT || 5000;
const checfs = require('./data/checfs.json')
app.get('/',(req,res)=>{
res.send('Food is running');
})

app.get('/checfs',(req,res)=>{
    res.send(checfs);
})

app.listen(port,()=>{
    console.log(`Food api on ${port}`)
})
