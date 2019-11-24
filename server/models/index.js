const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const { Client } = require('mysql');
const basename = path.basename(__filename); // what is this for?
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config.json')[env];
const defaultURI = 'mysql://' + 'config.username' + ':' + config.password
                    + '@' + config.host + ':' + config.port + '/mysql';
let db = {};

// create database using mysql (sequelize sync creates tables)
// saying module.exports allows this to be accessed elsewhere
module.exports.init = (done) => {
    const client = new Client({ connectionString: defaultURI });
    client.connect((err) => {
        if ( err ) {
            throw err;
        }
    });

    client.query('CREATE DATABASE ' + config.database, (err, res) => {
        client.end();

        let sequelize;

        // TODO (Becca) : work out what this does exactly
        if ( config.use_env_variable ) {
            sequelize = new Sequelize(process.env[config.use_env_variable], config);
        }
        else {
            sequelize = new Sequelize(config.database, config.username, config.password, config);
        }

        // TODO (Becca) : work out what this does exactly
        fs.readdirSync(__dirname)
          .filter(file => {
            return ( file.indexOf('.') !== 0 ) && ( file !== basename ) && ( file.slice(-3) === '.js');
          })
          .forEach(file => {
            const model = sequelize['import'](path.join(__dirname, file));
            db[model.name] = model;
          });

        // TODO (Becca) : work out what this does exactly  
        Object.keys(db).forEach(modelName => {
            if (db[modelname].associate) {
                db[modelName].associate(db);
            }
        });

        // TODO (Becca) : work out what this does exactly
        db.sequelize = sequelize;
        db.Sequelize = Sequelize;

        // I think we don't need this because we only have one table, so no foreign keys
        /*db.User.hasMany(db.Recording, {as: 'recordings', foreignKey: 'username'});
        db.User.belongsToMany(db.Group, {through: 'GroupUser'});
        db.Group.belongsTo(db.User, {as: 'admin'});*/

        done(db);
    });
};