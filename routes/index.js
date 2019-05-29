const express = require('express')

const router = express.Router();
const studentRoutes = require('./students')
const milestoneRoutes = require('./milestones')

router.use('/api/students/', studentRoutes)
router.use('/api/milestones/', milestoneRoutes)

module.exports = router
