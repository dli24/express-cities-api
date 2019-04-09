const express = require ('express')
const bodyParser = require ('body-parser')
const app = express();
const PORT = process.eventNames.PORT || 3000;

//CORS- CROSS ORIGIN RESOURCE SHARING
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// BodyParser Middleware -- Intercepts all request, pull data out and puts it in req.body
app.use(bodyParser.urlencoded({encoded: false}));
app.use(bodyParser.json());


//----------------------------------TEMP DATA-------------------------------------

const cities = [
    {name: 'San Francisco', description: 'Foggy city by the bay'},
    {name: 'Los Angeles', description: 'Fun in the Sun'},
];

//---------------------------------ROUTES----------------------------------------

// GET ROOT ROUTE
app.get('/', (req,res)=>{
    res.send('<h1>EXPRESS DYNAMIC CITIES</h1>')
});

// GET API INDEX Cities ROUTE
app.get('/api/cities', (req,res)=>{
    // console.log("req receive")
    res.json(cities);

});

//GET API SHOW CITIES ROUTE
app.get('/api/cities/:index', (req, res)=>{
    const city = cities[req.params.index] || `No city exist at index ${req.param.index}`;
    res.json(city);
});

//POST API CREATE Cities Routes
app.post('/api/cities',(req,res)=>{
    const newCity = req.body;
    cities.push(newCity)
    res.json(newCity);
});

// PUT API UPDATE Cities Route
app.put('/api/cities/:index', (req, res)=>{
    const index = parseInt(req.params.index);
    const cityToUpdate = cities[index];
    if(!cityToUpdate){
        return res.json({msg: 'No city exists at index '+ index})
    }

    cityToUpdate.name = req.body.name;
    cityToUpdate.description = req.body.description;

    res.json(cityToUpdate);
});

// DELETE API DESTORY Cities ROUTE
app.delete('/api/cities/:index', (req,res)=>{
    const index = parseInt(req.params.index);
    const cityToDelete = cities[index];
    if(!cityToDelete){
        return res.json({msg: 'No city exists at index' + index})
    }
    const deletedCity = cities.splice(index, 1);
    res.json(deletedCity);
});

// -----------------Start Server on PORT 3000---------------------------
app.listen(PORT,()=>console.log(`Server started on post ${PORT}`));

