import axios from 'axios';
import { WeatherModel } from '../models/weather.model';

export class WeathersServiceConfiguration {
    apiBaseUrl: string;
    apiKey: string;

    constructor(apiBaseUrl: string, apiKey: string) {
        this.apiBaseUrl = apiBaseUrl;
        this.apiKey = apiKey;
    }
}

export default class WeathersService {
    private configuration: WeathersServiceConfiguration;

    constructor(configuration: WeathersServiceConfiguration) {
        this.configuration = configuration;
    }

    async getWeatherByCity(cityName: string): Promise<WeatherModel | null> {
        const url = `${this.configuration.apiKey}/weather?q=${cityName}&appid=${this.configuration.apiBaseUrl}`;

        try {
            return await (await axios.get<WeatherModel>(url)).data;
        } catch (error) {
            console.error(error);

            return null;
        }        
    }
}