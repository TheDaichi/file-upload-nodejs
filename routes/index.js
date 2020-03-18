var express = require('express');
var router = express.Router();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/profile', upload.single('avatar'), (req, res) => {
  res.json(req.file);
});

module.exports = router;
