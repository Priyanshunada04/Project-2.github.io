const express = require("express");
const router = express.Router();
const user = require("../services/user");


/* POST programming language */
router.post("/", async function (req, res, next) {
    try {
      res.json(await user.create(req.body));
    } catch (err) {
      console.error(`Error while creating user`, err.message);
      next(err);
    }
  });

  module.exports = router;