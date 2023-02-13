
const express = require('express');
const router = express.Router();

const controller = require('../../controllers/devices');

router.get('/', controller.get);
router.post('/', controller.post);
router.patch('/:_id', controller.patch);


module.exports = (app) => app.use("/devices", router);
