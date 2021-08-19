"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
module.exports = function (app) {
    app.get('/auth', passport_1.default.authenticate('github', { scope: ['repo'] }));
    app.get('/auth/callback', passport_1.default.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/auth',
    }));
    app.get('/auth/logout', function (req, res) {
        if (!req.user) {
            res.redirect('/');
            return;
        }
        else {
            req.logout();
            res.redirect('/');
        }
    });
};
