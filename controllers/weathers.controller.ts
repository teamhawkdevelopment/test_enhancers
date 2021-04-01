import express from 'express';

const weathersController = express.Router();

weathersController.get("/", (req, res) => {
    res.send("Weathers works!");
});

export default weathersController;