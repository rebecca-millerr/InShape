const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'InShape_20',
    database: 'inshape'
});

const {getHomePage} = require('./routes/index.js');
const {addUserPage, addUser, deleteUser, editUser, editUserPage} = require('./routes/user.js');
const port = 5000;

// Connect
db.connect(function(err) {
    if(err) throw err;
    console.log('MySql Connected...');
});

// Create DB
// app.get('/createdb', (req, res) => {
//     let sql = 'CREATE DATABASE inshape';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created...');
//     });
// });

// // // Create table
// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE inshape.users (id int(5) NOT NULL AUTO_INCREMENT, first_name varchar(255) NOT NULL, last_name varchar(255) NOT NULL, email varchar(255) NOT NULL, password varchar(255) NOT NULL, birth date NOT NULL, sex char(1) NOT NULL, height int(11) NOT NULL, weight int(11) NOT NULL, bmi float NOT NULL, bmi_goal float NOT NULL, created date NOT NULL, modified date NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Users table created...');
//     });
// });

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// // routes for the app
app.get('/', getHomePage);
app.get('/add', addUserPage);
app.get('/edit/:id', editUserPage);
app.get('/delete/:id', deleteUser);
app.post('/add', addUser);
app.post('/edit/:id', editUser);


// // set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
