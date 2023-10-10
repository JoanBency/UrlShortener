const express = require('express');
const dotenv = require('dotenv');
const redirectUrl_Act = require('../Controllers/redirectUrl');

const router = express.Router();

const Url = require('../Models/urlList');

dotenv.config();

router.get('/:code', redirectUrl_Act.getUrl);

module.exports = router;