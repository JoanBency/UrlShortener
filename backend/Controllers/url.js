const express = require('express');
const dotenv = require('dotenv');
const validUrl = require('valid-url');
const shortId = require('shortid');
const axios = require('axios');
const requestIp = require('request-ip');

const Url = require('../Models/urlList');

dotenv.config();

const getAllUrl = async (req, res) => {
    try {
        const url = await Url.find();
        if (url) {
            return res.json(url);
        } else {
            return res.status(404).json('No url found');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json('Server error');
    }
}

const postUrl = async (req, res) => {
    const { longUrl } = req.body;

    const baseUrl = process.env.BASE_URL;

    const userIP = requestIp.getClientIp(req);

    // const geoResponse = await axios.get(`https://ipinfo.io/${userIP}/json`);
    // const geoData = geoResponse.data;

    // console.log(userIP);

    if (!validUrl.isUri(baseUrl)) {
        return res.status(401).json('Invalid base url');
    }

    const urlId = shortId.generate();


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
                    clicks: 0,
                    userIP
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

const deleteUrl = async (req, res) => {
    const { urlId } = req.params;
    try {
        const result = await Url.deleteOne(urlId);
        if (result) {
            res.json('Url deleted');
        }
        else {
            res.status(404).json('Url not found');
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json('Server error');
    }
}

module.exports = { getAllUrl, postUrl, deleteUrl };