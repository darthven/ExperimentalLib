"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("../lib/core-module/context/Context");
// let iservice = new InternetOrderManagementService();
// let tvservice = new TvOrderManagementService();
// let mservice = new MobileOrderManagementService();
// let customer = new Customer('darthven', null);
// let order1 = iservice.createOrder(customer, 'Order1', 2500, 54);
// let order2 = iservice.createOrder(customer, 'Order2', 2500, 54);
// let order3 = tvservice.createOrder(customer, 'Order3', 2500, ['ch1', 'ch2']);
// let order4 = tvservice.createOrder(customer, 'Order4', 2500, ['ch3', 'ch4']);
// let order5 = mservice.createOrder(customer, 'Order5', 2500, ['vodafone', 'life']);
// let order6 = mservice.createOrder(customer, 'Order6', 2500, ['kyivstar', 'beeline']);
// console.log(order5);
// let context2 = new Context(["../context2.json"]);
// context2.registerShutdownHook();
var http = require('http');
var path = require('path');
var configs = [__dirname + "/config/context.json", __dirname + "/config/context1.json", __dirname + "/config/context2.json"];
var context1 = new Context_1.default(configs);
//let context2 = new Context(configs);
context1.registerShutdownHook();
//context2.registerShutdownHook();
http.createServer(function (req, res) {
    context1.updateContext();
    var admin = context1.getComponent('admin');
    // console.log(admin);
    // admin.hello();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(admin, null, 3));
    res.end();
}).listen(8080);
//
// const server2 = http.createServer((req, res) => {
//   //context2.updateContext();
//   let user = context2.getComponent('user1');
//   // console.log(user);
//   // user.hello();
//   res.writeHead(200, {"Content-Type": "application/json"});
//   res.write(JSON.stringify(user, null, 3));
//   res.end();
// });
//