"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    get info() {
        return require('./info').default;
    },
    get api() {
        return require('./api').default;
    },
    get auth() {
        return require('./auth').default;
    },
};
