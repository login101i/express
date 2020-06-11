const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('news', { title: 'Wow to są newsy' });
});

module.exports = router;
