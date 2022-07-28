const router = require('express').Router();
const { getStudent, getData } = require('../controller/data')

router.get('/', getData)
router.get('/data', getStudent);

module.exports = router;