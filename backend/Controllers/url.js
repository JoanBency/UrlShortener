const express = require('express');
const dotenv = require('dotenv');
const validateUrl = require('valid-url');
const shortId = require('shortid');

dotenv.config();

const postUrl = async (req, res) => {
    const { longUrl } = req.body;

    const baseUrl = process.env.BASE_URL;

    if (!validateUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    const urlCode = shortId.generate();

    if (validateUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });
            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlCode;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date(),
                    clicks: 0
                });
                await url.save();
                res.json(url);
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json('Server error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
}

const getUrl = async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
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

module.exports = {postUrl, getUrl};