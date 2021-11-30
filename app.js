// start
let express = require('express');
let app = express();
app.use(express.static('public'));
app.listen(3000, function(){
    console.log('express start on port 3000');
});
app.get('/', function(req, res){
    res.render('index.html');
})
// end 