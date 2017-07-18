"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var Admin_1 = require("./components/classes/Admin");
var http = require('http');
var path = require('path');
var configs = [__dirname + "/config/context.json", __dirname + "/config/context1.json", __dirname + "/config/context2.json"];
var context1 = new index_1.MetadataContext(configs);
//let context2 = new Context(configs);
context1.registerShutdownHook();
//context2.registerShutdownHook();
var admin = context1.getComponentEntityInstance('adminId');
admin.name = 'Bean name';
console.log('From Context', admin);
var admin2 = new Admin_1.default();
admin2.name = 'asdad';
admin2.age = 123;
admin2.bye();
console.log('Simple', admin2);
admin.bye();
