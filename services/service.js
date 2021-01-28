class employeeService {
 
    employeeRegister = (req, res) => {
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var gender = req.body.gender;
        var phoneNumber = req.body.phoneNumber;
        var emailID = req.body.emailID;
        var city = req.body.city;
        console.log(req.body);
    }
}

module.exports = new employeeService();