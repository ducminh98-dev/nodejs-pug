require('dotenv').config();

// const db = require('./db');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGO_URL);

const app = express();



const userRouter = require('./router/users.router');
const loginRouter= require('./router/login.router');
const sign_upRouter = require('./router/sign_up.Router');
const productRouter =require('./router/products.router');
const cartRouter = require('./router/cart.router');
const tranferRouter = require('./router/tranfer.router');
const apiProductRouter = require('./api/routers/product.router')


const is_login_middelware = require('./middlewares/login?_middleware');
const sesession_middleware = require('./middlewares/session.midlerware');

const port = 8080;

app.set('views','./views');
app.set('view engine', 'pug');

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

app.use(cookieParser(process.env.SESSION_SECRET));


// static file
app.use(express.static('public'))
app.use('/users',express.static('public'));



app.use(sesession_middleware);
app.get('/',function (req,res){
    res.render('home');
});

app.use('/users',is_login_middelware.authen_login,userRouter);
app.use('/login',loginRouter);
app.use('/sign_up',sign_upRouter);
app.use('/products',productRouter);
app.use('/cart',cartRouter);
app.use('/api/products',apiProductRouter)


app.use(csurf({ cookie: true }))
app.use('/tranfer',is_login_middelware.authen_login,tranferRouter);




app.listen(port, () => {
    console.log("Server is running");
});
 

