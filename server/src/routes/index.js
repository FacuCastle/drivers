const { Router } = require("express");
const routesDrivers = require("../routes/routesDrivers")
//const routesTeam = require("../routes/routesDrivers")
const express = require('express')
const router = Router();

router.use(express.json());

router.use("/drivers", routesDrivers)

// router.use('/team', routesTeam)

module.exports = router;
