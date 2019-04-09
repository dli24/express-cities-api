const express = require ('express')
const app = express();
const PORT = process.eventNames.PORT || 3000;

//CORS- CROSS ORIGIN RESOURCE SHARING
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//---------------------------------ROUTES----------------------------------------





//--------------------GET ROOT ROUTE
app.get('/', (req,res)=>{
    res.send('<h1>EXPRESS DYNAMIC CITIES</h1>')
})


  //Start Server on PORT 3000
app.listen(PORT,()=>console.log(`Server started on post ${PORT}`));

