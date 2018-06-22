const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
router.get('/student2', (req, res, next) => {
  res.render('student2');
});


=======
router.get('/student1', (req, res, next) => {
  res.render('student1');
});

>>>>>>> 48ed00839fa6841359e43ce250275a0eabf12430
module.exports = router;
