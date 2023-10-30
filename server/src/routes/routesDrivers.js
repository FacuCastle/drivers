const { Router } = require("express");
const { getDriversHandler } = require("../handlers/getDriversHandler")
// const getDriversIdHandler =require("../handlers/getDriversIdHandler")
const postDriversHandler = require("../handlers/postDriversHandler")

const driversRouter = Router();

driversRouter.get("/", getDriversHandler);
driversRouter.post("/create", postDriversHandler);
// driversRouter.get("/?name", getDriversHandler)
// driversRouter.get("/:idDriver",getDriversIdHandler);

module.exports = driversRouter;