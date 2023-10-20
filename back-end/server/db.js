const mongoose = require('mongoose')

const connectionString = `mongodb+srv://fredhe56:ieatdogs69420@freats.tjuajhz.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('Database Connected')).catch((err)=>console.log(err));