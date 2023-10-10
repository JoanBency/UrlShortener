const express = require('express');
const dotenv = require('dotenv');
const url_Act = require('../Controllers/url');

const router = express.Router();

const Url = require('../Models/urlList');

dotenv.config();

router.get('/', url_Act.getAllUrl);
router.post('/shorten', url_Act.postUrl);
router.delete('/:id', url_Act.deleteUrl);

module.exports = router;
