const { Router } = require("express");

const driversRouter = Router();

driversRouter.get("/", getDriversHandler);
driversRouter.get("/:idDriver",getDriversIdHandler);
driversRouter.post("/", postDriversHandler);