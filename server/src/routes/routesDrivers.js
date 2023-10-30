const { Router } = require("express");
const {getDriversHandler} = require("../handlers/getDriversHandler")
// const getDriversIdHandler =require("../handlers/getDriversIdHandler")
// const postDriversHandler =require("../handlers/postDriversHandler")

const driversRouter = Router();

driversRouter.get("/", getDriversHandler);
// driversRouter.get("/?name", getDriversHandler)
// driversRouter.get("/:idDriver",getDriversIdHandler);
// driversRouter.post("/create", postDriversHandler);

module.exports = driversRouter;