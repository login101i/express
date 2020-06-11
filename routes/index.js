const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res)=> {
  res.render('index', { title: 'Wow mogę przekazać tutaj co chcę, np tablicę, stałą itp' });
});

module.exports = router;
