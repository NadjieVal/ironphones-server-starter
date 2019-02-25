const express = require("express");

const Phone = require("../models/phone-model.js");

const router = express.Router();

router.get("/phones", (req, res, next) => {
  Phone.find()
    .sort({ createdAt: -1 })
    .limit(20)
    // send the DB query results array as JSON response to the client
    .then(phoneResult => res.json(phoneResult))
    .catch(err => next(err));
});

module.exports = router;
