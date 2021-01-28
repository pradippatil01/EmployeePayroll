const employeeservice = require('../services/service');
class employeeController {
    employeeRegister = (req,res) => {
        employeeservice.employeeRegister(req);
    }

    readData=()=>{
        return res.send('Hello');
    }
}
module.exports = new employeeController();

