const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const port = 5000;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'InShape_20',
    database: 'inshape'
});


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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// add user
app.post('/add', function(req, res) {
    let id = req.body.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let birth = req.body.birth;
    let sex = req.body.sex;
    let height = req.body.height;
    let weight = req.body.weight;
    let bmi = req.body.bmi;
    let bmi_goal = req.body.bmi_goal;
    let created = req.body.created;
    let modified = req.body.modified;

    let usernameQuery = "SELECT * FROM 'users' WHERE first_name = '" + first_name + "'";

    db.query(usernameQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (result.length > 0) {
            //res.send("name exists");
            console.log("Name exists");
        } else {
            // send the user's details to the database
            let query = "INSERT INTO `users` (id, first_name, last_name, email, password, birth, sex, height, weight, bmi, bmi_goal, created, modified) VALUES ('" + 
            id + "', '" + first_name + "', '" + last_name + "', '" + email + "', '" + password + "', '" + birth + "', '" + sex + "', '" + height + "', '"  + weight + "', '" + bmi + "', '" + bmi_goal + "', '" + created + "', '" + modified + "')";
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/'); //set link to wherever next
            });
        }
    });
});

//edit user
app.post('/edit/:id', function(req, res) {
    let userId = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let birth = req.body.birth;
    let sex = req.body.sex;
    let height = req.body.height;
    let weight = req.body.weight;
    let bmi = req.body.bmi;
    let bmi_goal = req.body.bmi_goal;
    let created = req.body.created;
    let modified = req.body.modified;

    let query = "UPDATE `users` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "', `email` = '" + email + "', `password` = '" + password + "', `birth` = '" + birth + "', `sex` = '" + sex + "', `height` = '" + height + "', `weight` = '" + weight + "', `bmi` = '" + bmi_goal + "', `created` = '" + created + "', `modified` = '" + modified + "' WHERE `users`.`id` = '" + userId + "'";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/'); // set to whichever page to direct
    });
});

app.get('/delete/:id', function(req, res) {
    let userId = req.params.id;
    let deleteUserQuery = 'DELETE FROM users WHERE id = "' + userId + '"';
});

// // set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
