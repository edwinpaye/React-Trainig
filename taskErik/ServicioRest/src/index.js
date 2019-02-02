const Express = require('express');
const PersonasRouter = require('./componentes/personas');
const mongoose = require('mongoose');
// var fs = require('fs')
// var https = require('https')
mongoose.Promise = global.Promise;

const app = Express();

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({extended:true}));

PersonasRouter.router(app);

mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{console.log('the connection to the database was a success')})
.catch((error)=>{console.log()});

app.listen(3000, (error)=>{
    if(error){
        console.log(error.message);
        process.exit(0);
    }
    console.log('the application is up on port: 3000');
});