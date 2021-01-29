const employeeModel = require('../model/employeeModel');
class employeeService {
    employeeRegister = (req, res) => {
        let employeeDeatil = {
            "firstName": req.firstName,
            "lastName": req.lastName,
            "gender": req.gender,
            "phoneNumber": req.phoneNumber,
            "emailID": req.emailID,
            "city": req.city,
        };
        employeeModel.create(employeeDeatil);
    }
}

module.exports = new employeeService();