const fs = require('fs');

module.exports = {
    addUserPage: (req, res) => {
        res.render('add-user.ejs', {
            title: "Welcome to Socka | Add a new user"
            ,message: ''
        });
    },
    addUser: (req, res) => {
        if (!req.files) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
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
                message = 'Name already exists';
                res.render('add-user.ejs', {
                    message,
                    title: "Welcome to Socka | Add a new user"
                });
            } else {
                // send the user's details to the database
                let query = "INSERT INTO `users` (id, first_name, last_name, email, password, birth, sex, height, weight, bmi, bmi_goal, created, modified) VALUES ('" + 
                id + "', '" + first_name + "', '" + last_name + "', '" + email + "', '" + password + "', '" + birth + "', '" + sex + "', '" + height + "', '"  + weight + "', '" + bmi + "', '" + bmi_goal + "', '" + created + "', '" + modified + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    },
    editUserPage: (req, res) => {
        let userId = req.params.id;
        let query = "SELECT * FROM `users` WHERE id = '" + userId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-user.ejs', {
                title: "Edit  User"
                ,user: result[0]
                ,message: ''
            });
        });
    },
    editUser: (req, res) => {
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
            res.redirect('/');
        });
    },
    deleteUser: (req, res) => {
        let userId = req.params.id;
        let getImageQuery = 'SELECT image from `users` WHERE id = "' + userId + '"';
        let deleteUserQuery = 'DELETE FROM users WHERE id = "' + userId + '"';
    }
};
