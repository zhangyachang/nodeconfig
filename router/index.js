const express = require('express'),
    router = express.Router();

router.get('/',(req,res)=>{
    res.send('数据');
});

module.exports = router;