const router = require('express').Router();

router.get('/login',(req,res)=>{
    res.render('login')
});



router.get('/google',(req,res)=>{

    res.send('sahi jaa rha hai!')
});


router.get('/logout',(req,res)=>{
    res.send('loging out')
});

module.exports = router;