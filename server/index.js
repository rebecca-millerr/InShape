const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const app        = express();

const port = 5000;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createPool({    
    host     : 'us-cdbr-iron-east-05.cleardb.net',
    user     : 'b2a20be38fef59',
    password : '74b6ec4b',
    database : 'heroku_e96bd86a9e3395b'
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
            res.json(err);
        }
        else {
            res.json({ "status" : "success" })
        }
    });
});

//delete user
app.get('/delete/:username', function(req, res) {
    let username = req.params.username;
    let deleteUserQuery = 'DELETE FROM users WHERE username = "' + username + '";';
    db.query(deleteUserQuery, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ "status" : "success" })
        }
    });
});

//get user info
app.get('/info/:username', function(req, res) {
    let username = req.params.username;
    let usernameQuery = "SELECT * FROM users WHERE username = '" + username + "';";
    db.query(usernameQuery, (err, result) => {
        
        if (err) {
            res.json(err);
        }
        if (result.length === 0) {
            res.json({ "status" : "failed" });
        }
        else
            res.json(result);
    });
});

// get current username
app.get('/current', (req, res) => {
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
app.get('/log_out', (req, res) => {
    let deleteUserQuery = "DELETE FROM heroku_e96bd86a9e3395b.current_user;";    
    db.query(deleteUserQuery, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ "status" : "success" })
        }
    });
});

// // set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
