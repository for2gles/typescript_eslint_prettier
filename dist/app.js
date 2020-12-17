"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default(); // express 실행
app.listen(1234, function () {
    console.log('Hello, World!'); // 서버가 실행되면 콘솔에 'Hello, World!' 출력
});
var a = 'abc';
