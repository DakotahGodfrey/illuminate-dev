"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var express_session_1 = __importDefault(require("express-session"));
var passport_1 = __importDefault(require("passport"));
module.exports = function (app) {
    app.use(express_1.default.json());
    app.use(cors_1.default({ origin: 'https://illuminate-dev.netlify.app/', credentials: true }));
    app.set('trust proxy', 1);
    app.use(express_session_1.default({
        secret: 'secretCode',
        resave: true,
        saveUninitialized: true,
        // cookie: {
        //   // sameSite: 'none',
        //   secure: true,
        //   maxAge: 1000 * 60 * 60 * 24 * 7,
        // },
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
};
