const mongoose = require("mongoose");
const express = require("express");

import models from './models'

const app = express();
mongoose.connect('mongodb://localhost/baseHead');

app.post('/setData', (req, res) => {
    const reqBody = req.body;
    const post = new models({
        id: reqBody.id,
        name: reqBody.name,
        data: reqBody.data
    });

    post.save().then(() => {
        res.json({status: 'ok'});
    });
});

