const employeeservice = require('../services/service');
class employeeController {
    employeeRegister = (req,res) => {
        employeeservice.employeeRegister(req.body);
    }
}
module.exports = new employeeController();

