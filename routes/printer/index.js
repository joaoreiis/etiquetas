const express = require('express');
const router = express.Router();

const controller = require('../../controllers/printer');

router.post('/', controller.post);

module.exports = (app) => app.use("/printer", router);
