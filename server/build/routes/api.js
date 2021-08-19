"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (app) {
    app.get('/api/current-user', function (req, res) {
        console.log(req.user);
        if (!req.user) {
            res.send({ error: 'no user found' });
        }
        res.send(req.user);
    });
};
