const express = require("express");

const RecepiesRouter = require("./recepies/recepies-router.js");

const server = express();

server.use(express.json());
server.use("/api/recepies", RecepiesRouter);

module.exports = server;
