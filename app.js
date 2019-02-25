const express = require('express');
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({defaultLayout: 'home'}));

app.set('view engine', 'handlebars');

app.listen(4500, ()=>{
    console.log('listening 4500...');
});

app.get('/', (req, res)=>{
    // res.send('something')
    res.render('home/index');
})