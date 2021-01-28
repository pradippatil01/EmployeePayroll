const router = require('express').Router();

router.get('/employee/read', function (req, res) {
    res.send('read employee data..')
})
router.get('/employee/add', function (req, res) {
    res.send('add employee data..')
})

router.get('/employee/delete', function (req, res) {
    res.send('delete employee data..')
})

router.get('/employee/update', function (req, res) {
    res.send('update employee data..')
})

module.exports = router