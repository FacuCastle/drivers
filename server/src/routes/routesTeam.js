const { Router } = require("express");
const teamRouter = Router();
const getTeamHandler =require("../handlers/getTeamHandler")

teamRouter.get("/", getTeamHandler);

module.exports = teamRouter;