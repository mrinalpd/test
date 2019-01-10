const express= require('express');
const hbs= require('hbs');
const port = process.env.PORT || 3000;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>
{
    next();         //not having this does not load the page, used for secure access
}
);
app.get('/',(req,res)=>
{
    res.render('index.hbs',
        {
            text1: 'SEYCHELLES'
        }
    );
}
);

app.listen(port,()=>
{
    console.log('Server set up on port 3000');
});       // listen takes a port number say 3000