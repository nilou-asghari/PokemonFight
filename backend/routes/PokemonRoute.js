const express = require("express");
const router = express.Router();
const {
  getAllPokemons,
  getById,
  getInfoById,
} = require("../controllers/pokemon");

router.get("/", (req, res) => {
  res.send(getAllPokemons());
});

router.get("/:id", (req, res) => {
  res.send(getById(req.params.id));
});

router.get("/:id/:info", (req, res) => {
  res.send(getInfoById(req.params.id, req.params.info));
});

module.exports = router;
