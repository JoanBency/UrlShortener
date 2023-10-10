const express = require('express');
const dotenv = require('dotenv');
const validUrl = require('valid-url');
const shortId = require('shortid');

const Url = require('../Models/urlList');

dotenv.config();

const postUrl = async (req, res) => {
    const { longUrl } = req.body;

    console.log(req.body); //temporary

    const baseUrl = process.env.BASE_URL;

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    const urlId = shortId.generate();

    // console.log(urlId); //temporary
    console.log(longUrl); //temporary

    if (validUrl.isUri(longUrl)) {
        try {
            let url = await Url.findOne({ longUrl });
            if(url) {
                res.json(url);
            } else {
                const shortUrl = baseUrl + '/' + urlId;
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlId,
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

module.exports = {postUrl };