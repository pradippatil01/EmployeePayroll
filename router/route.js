const router = require('express').Router();
const controller = require('../controller/controller');

router.post('/employeeRegister',controller.employeeRegister)

module.exports = router