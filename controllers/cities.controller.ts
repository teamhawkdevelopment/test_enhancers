import express, { Router } from 'express';
import { ShopModel } from '../models/shop.model';
import { WeatherModel } from '../models/weather.model';
import { ShopsService } from '../services/shops.service';
import WeathersService from '../services/weathers.service';

export interface CityDto {
    city: string;
    weather: WeatherModel;
    shops: ShopModel;
}

const citiesController = express.Router();

citiesController.get("/", async (req, res) => {
    const cities = [
        "Turin",
        "New York",
        "Paris",
        "Moscow",
        "Canberra"
    ];

    const weathersService = (req as any).container.get("services.weathers") as WeathersService;
    const shopsService = (req as any).container.get("services.shops") as ShopsService;

    let citiesResponse: CityDto[] = [];

    for (const city of cities) {
        let weather = await weathersService.getWeatherByCity(city);

        let shops = await shopsService.getShopsByCity(city);

        if (weather && shops)
            citiesResponse.push({
                city,
                weather,
                shops
            });
    }

    res.json(citiesResponse);
});

export default citiesController;