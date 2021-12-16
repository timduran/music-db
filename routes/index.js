const router = require('express').Router()

router.use('/api', require('./musicRoutes.js'))



module.exports = router;