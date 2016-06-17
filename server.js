'use strict';

const Hapi = require('hapi');
const Jwt = require('hapi-auth-jwt');
const glob = require('glob');
const path = require('path');
//Server construction
const server = new Hapi.Server();
server.connection({
    port: 3000
});

server.register(require('hapi-auth-jwt'), (err) => {
    // something bad happened loading the plugin
    if (err) {
        throw err;
    }
    //Define the auth strategy as JWT and given a name
    server.auth.strategy('token', 'jwt', {
   key: new Buffer('4Yjy301rGK8E68K-5EVuATSbsl9GOy6Xps2OelESrJkj4Zm98KOEkrxCyE1BwiSP', 'base64'),
   verifyOptions: {
     algorithms: [ 'HS256' ],
     audience: 'L94smgcDX2sPWFOGgRZF3Gi4P9DI5szq'
   }
 });
    //Scan the directories looking for routes and copy them into an unique file
    glob.sync('modules/**/routes/*.js', {
        root: __dirname
    }).forEach(file => {
        const route = require(path.join(__dirname, file));
        server.route(route);
    });

    //Server initialization
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at: ' + server.info.uri);
    });
});
