const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
require('dotenv').config();
const joi = require('joi');
const bcrypt = require('bcryptjs');
const cors = require('cors')
const jwtExpirySeconds = 3000;

const app = express();
app.use(express.json());

const DB_URL = process.env.DB_URL
const jwtKey = process.env.JWTKEY

mongoose.connect(DB_URL).then(() => console.log('connected to mongodb sucessfully')).catch(err => console.log('could not connect', err));


app.listen(8080, () => {
    console.log('listening')
})