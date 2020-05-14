const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts')

// router.get('/', postsCtrl.index);


router.post('/get', postsCtrl.getTracks)
module.exports = router;