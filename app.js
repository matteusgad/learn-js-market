// start
let express = require('express');
let app = express();
app.use(express.static('public')); // name folder static
app.set('view engine', 'pug');


app.listen(3000, function(){
    console.log('express start on port 3000');
});




app.get('/', function(req, res){
    res.render('main', {
        foo: 1,
        bar: 2
    });
    
})

app.get('/cat', function(req, res){
    res.end('cat')
})
// end 