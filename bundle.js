"use strict";var e=require("koa"),r=require("path"),o=require("koa-helmet"),s=require("koa-static"),a=require("koa-combine-routers"),i=require("koa-router"),t=require("koa-body"),u=require("koa-json"),c=require("@koa/cors"),n=require("koa-compose"),m=require("koa-compress");var q=new class{constructor(){}async demo(e){e.body={msg:"body message!!!"}}};const k=new i;k.get("/demo",q.demo);var p=a(k);const d=new e,l="production"!==process.env.NODE_ENV,y=n([t(),s(r.join(__dirname,"../public")),c(),u({pretty:!1,param:"pretty"}),o()]);l||d.use(m()),d.use(y),d.use(p()),d.listen(3e3,(()=>{console.log("toimc")}));