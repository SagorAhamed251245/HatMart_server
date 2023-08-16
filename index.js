const  express = require('express'); 
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config()

mongoose.connect(process.env.URL).then(()=> console.log('database connected..')).catch(err => console.log(err))

// server medelwere 
app.use(cors())
app.use(express.json())

// route 
app.get("/",()=> {
    resizeBy.send('hatmart project')
});


// server listen 
const PORT = process.env.PORT;
app.listen(PORT, ()=>{
    console.log("server listening... " + PORT)
})