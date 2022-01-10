// start
let express = require('express');
let app = express();
app.use(express.static('public')); // name folder static
app.set('view engine', 'pug');

let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'market',
    password: 'market',
    database: 'market'
    
});


app.listen(3000, function(){
    console.log('express start on port 3000');
});




app.get('/', function(req, res){
    connection.query(
        'SELECT * FROM products',
        function(error, result){
            if (error) throw error
                res.render('main', {
                    products: JSON.parse(JSON.stringify(result))
             });

        }
    );    
})

app.get('/category', function(req, res){
    let catID = req.query.id;
    let category = new Promise(function(resolve, reject){
        connection.query(
            'SELECT * FROM category WHERE id='+catID,
            function(error,result){
                if(error) reject(error);
                resolve(result);
            }
        );
    });

    let products = new Promise(function(resolve, reject){
        connection.query(
            'SELECT * FROM products WHERE category='+catID,
            function(error, result){
                if( error ) reject(error);
                resolve(result);
            }
        );
    });

    Promise.all([category,products]).then(function(valve){
        res.render('category', {
            category:  JSON.parse(JSON.stringify(valve[0])),
            products:  JSON.parse(JSON.stringify(valve[1]))
        })
    });
    
});

app.get('/product', function(req,res){
    let id = req.query.id
    connection.query('SELECT * FROM products WHERE id='+id , function(error, result, fields){
        if(error) throw error;
        res.render('product', {
            product: JSON.parse(JSON.stringify(result))
        })
    })
});

