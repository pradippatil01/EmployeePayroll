const router = require('express').Router();
const controller = require('../controller/controller');

router.post('/employee/add',controller.employeeRegister)

module.exports = router