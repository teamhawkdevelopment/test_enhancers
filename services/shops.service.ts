import axios from "axios";
import { ShopModel } from "../models/shop.model";

export class ShopsServiceConfiguration {
    apiBaseUrl: string;
    apiClientId: string;
    apiKey: string;

    constructor(apiBaseUrl: string, apiClientId: string,
        apiKey: string) {
        this.apiBaseUrl = apiBaseUrl;
        this.apiClientId = apiClientId;
        this.apiKey = apiKey;
    }
}

export class ShopsService {
    configuration: ShopsServiceConfiguration;

    constructor(configuration: ShopsServiceConfiguration) {
        this.configuration = configuration;
    }

    async getShopsByCity(cityName: string): Promise<ShopModel | null> {
        const url = `${this.configuration.apiBaseUrl}/businesses/search?location=${cityName}`;

        try
        {
            return await (await axios.get<ShopModel>(url, {
                headers: {
                    "Authorization": `Bearer ${this.configuration.apiKey}`
                }
            })).data;
        } catch (error) {
            console.error(error);

            return null;
        }
    }
}