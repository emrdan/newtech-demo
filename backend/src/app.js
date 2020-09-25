const express = require("express");
const app = express();
const server = require("./loaders/server");

server(app);
