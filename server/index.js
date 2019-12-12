const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

const port = 5000;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));
    
//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
// }

// TESTS for server side passing data to front end

app.get('/', (req, res) => {
    res.json({"home" : "success"});
})

app.get('/api', (req, res) => {
    res.json({"test" : "success"})
})

app.post('/testpost', (req, res) => {
    console.log(req.body)
    res.json(req.body);
})

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b2a20be38fef59',
    password: '74b6ec4b',
    // host: 'localhost',
    // user: 'root',
    // password: 'InShape_20',
    database: 'heroku_e96bd86a9e3395b'
});

// Connect
db.connect(function(err) {
    if(err) throw err;
    console.log('MySql Connected...');
});

// OMIT THE COMMENTED CODE BELOW IF DATABASE & TABLE 
//              ARE ALREADY CREATED

// Create DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE inshape';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create users table
app.get('/createuserstable', (req, res) => {
    let sql = 'CREATE TABLE inshape.users (username varchar(255) NOT NULL, first_name varchar(255) NULL, last_name varchar(255) NULL, email varchar(255) NULL, password varchar(255) NULL, age int(11) NULL, sex char(1) NULL, height int(11) NULL, weight int(11) NULL, goal_weight int(11) NULL, activity int(1) NULL, diet varchar(255) NULL, allergy1 varchar(255) NULL, allergy2 varchar(255) NULL, allergy3 varchar(255) NULL, allergy4 varchar(255) NULL, allergy5 varchar(255) NULL, calories int(11) NULL, units varchar(255) NULL, PRIMARY KEY (`username`)) ENGINE=InnoDB DEFAULT CHARSET=latin1';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Users table created...');
    });
});

// Create current table
app.get('/createcurrenttable', (req, res) => {
    let sql = 'CREATE TABLE inshape.current_user (username varchar(255) NOT NULL, PRIMARY KEY (`username`)) ENGINE=InnoDB DEFAULT CHARSET=latin1';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Current table created...');
    });
});

// add user
app.post('/add', (req, res) => {

    let username    = req.body.username;
    let first_name  = req.body.first_name;
    let last_name   = req.body.last_name;
    let email       = req.body.email;
    let password    = req.body.password;
    let age         = req.body.age;
    let sex         = req.body.sex;
    let height      = req.body.height;
    let weight      = req.body.weight;
    let goal_weight = req.body.goal_weight;
    let activity    = req.body.activity;
    let diet        = req.body.diet;
    let allergy1    = req.body.allergy1;
    let allergy2    = req.body.allergy2;
    let allergy3    = req.body.allergy3;
    let allergy4    = req.body.allergy4;
    let allergy5    = req.body.allergy5;
    let calories    = req.body.calories;
    let units       = req.body.units;

    let usernameQuery = "SELECT * FROM users WHERE username = '" 
                        + username + "';";

    db.query(usernameQuery, (err, result) => {

        if (err) {
            res.json(err);
        }
        // if querying the username returns a result
        if (result.length > 0) {
            res.json({ "status" : "failed" });
        } else {
            // send the user's details to the database
            let query = "INSERT INTO `users` (username, first_name, "
                        + "last_name, email, password, age, sex, height, "
                        + "weight, goal_weight, activity, diet, allergy1, "
                        + "allergy2, allergy3, allergy4, allergy5, calories, "
                        + "units) VALUES ('" + username + "', '" + first_name 
                        + "', '" + last_name + "', '" + email + "', '" 
                        + password + "', '" + age + "', '" + sex + "', '" 
                        + height + "', '"  + weight + "', '" + goal_weight 
                        + "', '" + activity + "', '" + diet + "', '" 
                        + allergy1 + "', '" + allergy2 + "', '" + allergy3 
                        + "', '" + allergy4 + "', '" + allergy5 + "', '" 
                        + calories + "', '" + units + "');";
            
            db.query(query, (err, result) => {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json({ "status" : "success" });
                }
            });
        }
    });
});

//edit user
app.post('/edit/:username', function(req, res) {
    let username = req.params.username;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let age = req.body.age;
    let sex = req.body.sex;
    let height = req.body.height;
    let weight = req.body.weight;
    let goal_weight = req.body.goal_weight;
    let activity = req.body.activity;
    let diet = req.body.diet;
    let allergy1 = req.body.allergy1;
    let allergy2 = req.body.allergy2;
    let allergy3 = req.body.allergy3;
    let allergy4 = req.body.allergy4;
    let allergy5 = req.body.allergy5;
    let calories = req.body.calories;
    let units    = req.body.units;

    let query = "UPDATE `users` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "', `email` = '" + email + "', `password` = '" + password + "', `age` = '" + age + "', `sex` = '" + sex + "', `height` = '" + height + "', `weight` = '" + weight + "', `goal_weight` = '" + goal_weight + "', `activity` = '" + activity + "', `diet` = '" + diet + "', `allergy1` = '" + allergy1 + "', `allergy2` = '" + allergy2 + "', `allergy3` = '" + allergy3 + "', `allergy4` = '" + allergy4 + "', `allergy5` = '" + allergy5 + "', `calories` = '" + calories + "', `units` = '" + units + "' WHERE `users`.`username` = '" + username + "';";
    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/'); // set to whichever page to direct
    });
});

//delete user
app.get('/delete/:username', function(req, res) {
    let username = req.params.username;
    let deleteUserQuery = 'DELETE FROM users WHERE username = "' + username + '";';
    db.query(deleteUserQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.redirect('/'); // set to whichever page to direct
    });
});

//get user info
app.get('/info/:username', function(req, res) {
    let username = req.params.username;
    let usernameQuery = "SELECT * FROM users WHERE username = '" + username + "';";
    db.query(usernameQuery, (err, result) => {
        if (err) {
            return res.status(500).send(err)
        }
        if (result.length == 0) {
            res.send("User doesn't exist");
        }
        else
            res.send(result);
    });
});

//get current username
app.get('/current', function(req, res) {
    let usernameQuery = "SELECT username FROM heroku_e96bd86a9e3395b.current_user;";

    db.query(usernameQuery, (err, result) => {
        if (err) {
            res.json(err);
        }
        else if (result.length === 0) {
            res.json({ "username" : "---" });
        }
        else {
            res.json(result);
        }
    });
});

//log in current user
app.get('/log_in/:username', function(req, res) {
    let deleteUserQuery = 'DELETE FROM heroku_e96bd86a9e3395b.current_user;';    
    db.query(deleteUserQuery, (err, result) => {
        if (err) {
            res.json(err);
            // return res.status(500).send(err)
        }
        else {
            res.json("deleted")
            res.redirect('/'); //set link to wherever next
        }
    });
    let username = req.params.username;
    let addUserQuery = "INSERT INTO `current_user` (username) VALUES ('" + username + "');";
    db.query(addUserQuery, (err, result) => {
        if (err) {
            res.json({ "status" : "failed" })
        }
        else {
            res.json({ "status" : "success" })
        }
    });
});

//log out current user
app.get('/log_out', function(req, res) {
    let deleteUserQuery = 'DELETE FROM heroku_e96bd86a9e3395b.current_user;';    
    db.query(deleteUserQuery, (err, result) => {
        if (err) {
            res.json(err);
            // return res.status(500).send(err)
        }
        else {
            res.json("deleted")
            res.redirect('/'); //set link to wherever next
        }
    });
});

// // set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});




//
// UNIT TESTS BELOW
//

// var request = require('request');

// function addUser(postData){
//         var clientServerOptions = {
//             uri: 'http://localhost:5000/add',
//             body: JSON.stringify(postData),
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }
//         request(clientServerOptions, function (error) {
//             console.log(error);
//             return;
//         });
//     }

// function editUser(postData){
//     var clientServerOptions = {
//         uri: 'http://localhost:5000/edit/jackson',
//         body: JSON.stringify(postData),
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     request(clientServerOptions, function (error, response) {
//         console.log(error);
//         return;
//     });
// }      

// function deleteUser(){
//     request('http://localhost:5000/delete/jackson', function (error, response) {
//         console.log(error);
//         return;
//     });
// }

// function infoUser(){
//     request('http://localhost:5000/info/jackson', function (error, response) {
//         console.log(error,response.body);
//         return;
//     });
// }

// function currentUser(){
//     request('http://localhost:5000/current', function (error, response) {
//         console.log(error,response.body);
//         return;
//     });
// }

// function loginUser(){
//     request('http://localhost:5000/log_in/jackson', function (error, response) {
//         console.log(error);
//         return;
//     });
// }

// function logoutUser(){
//     request('http://localhost:5000/log_out', function (error, response) {
//         console.log(error);
//         return;
//     });
// }

// addUser( { username: "jackson", first_name: "jackson", last_name: "george", email: "blabla", password: "yoks", age: 53, sex: 'm', height: 190, weight: 80, goal_weight: 90, activity: 4, diet: "karatay", allergy1: "peanut", allergy2: "yok", allergy3: "george", allergy4: "", allergy5: "", calories: 190, units: "imperial" });
// editUser({ username: "jackson", first_name: "jo", last_name: "mayk", email: "yoyoy", password: "yoks", age: 53, sex: 'm', height: 190, weight: 80, goal_weight: 90, activity: 4, diet: "karatay", allergy1: "peanut", allergy2: "yok", allergy3: "george", allergy4: "", allergy5: "", calories: 120, units: "metric" });
// infoUser();
// deleteUser();

// loginUser();
// currentUser();
// logoutUser();
// currentUser();