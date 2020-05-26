const Koa = require('koa');
const Router = require('koa-router');
const Mysql = require('mysql');
const co = require('co-mysql');
const body = require('koa-better-body');

let conn = Mysql.createPool({host:'localhost', user:'root', password:'', database:'ydc'});

let server = new Koa();
server.listen(8081);


server.context.db=co(conn);

let obj = body({uploadDir:'./upload'});
server.use(obj);

server.use(async (ctx, next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
});

let router = new Router();

router.use('/api', require('./routers/api'));

server.use(router.routes());