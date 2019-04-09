const express = require ('express')
const app = express();
const PORT = process.eventNames.PORT || 3000;

//CORS- CROSS ORIGIN RESOURCE SHARING
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//----------------------------------TEMP DATA-------------------------------------

const cities = [
    {name: 'San Francisco', description: 'Foggy city by the bay'},
    {name: 'Los Angeles', description: 'Fun in the Sun'},
];

//---------------------------------ROUTES----------------------------------------

// GET ROOT ROUTE
app.get('/', (req,res)=>{
    res.send('<h1>EXPRESS DYNAMIC CITIES</h1>')
})

// GET API INDEX Cities ROUTE
app.get('/api/cities', (req,res)=>{
    // console.log("req receive")
    res.json(cities);

})

//GET API SHOW CITIES ROUTE
app.get('/api/cities/:index', (req, res)=>{
    const city = cities[req.params.index] || `No city exist at index ${req.param.index}`;
    res.json(city);
})


  //Start Server on PORT 3000
app.listen(PORT,()=>console.log(`Server started on post ${PORT}`));

