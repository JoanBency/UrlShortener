const express = require('express');
const dotenv = require('dotenv');
const validateUrl = require('valid-url');
const shortId = require('shortid');

const Url = require('../Models/urlList');

dotenv.config();


const getUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ urlId: req.params.code });
        if (url) {
            url.clicks++;
            url.save();
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json('No url found');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json('Server error');
    }
}

module.exports = { getUrl};