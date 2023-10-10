const express = require('express');
const dotenv = require('dotenv');
const url_Act = require('../Controllers/url');

const router = express.Router();

const Url = require('../Models/urlList');

dotenv.config();

router.post('/shorten', url_Act.postUrl);

module.exports = router;
