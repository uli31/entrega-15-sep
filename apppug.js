const express = require('express');
const app = express();
const userRouter = require('./rutas/metodos');
const data = userRouter.data

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.listen(8080,()=>{console.log('puerto 8080')});
console.log(data);

app.set('views', './viewsp');
app.set('view engine', 'pug');

app.use('/api',userRouter.router);

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/tabla',(req,res)=>{
    res.render(('tabla'),{
        data: data
    })
})
app.get('/formulario',(req,res)=>{
    res.render('formulario')
})
