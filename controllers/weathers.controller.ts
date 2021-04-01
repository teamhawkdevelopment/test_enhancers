import express, { Router } from 'express';
import WeathersService from '../services/weathers.service';

const weathersController = express.Router();

weathersController.get("/", async (req, res) => {
    var weathersService = (req as any).container.get("services.weathers") as WeathersService;

    res.json(await weathersService.getWeatherByCity("Turin"));
});

export default weathersController;