import express from 'express';
import cors from 'cors';
import citiesController from './controllers/cities.controller';
import WeathersService, { WeathersServiceConfiguration } from './services/weathers.service';
import { ContainerBuilder, Reference } from "node-dependency-injection";
import { ShopsService, ShopsServiceConfiguration } from './services/shops.service';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./swagger.json";

/* Setup the app */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8000;

/* Setup the services */

let container = new ContainerBuilder();

container.register("configurations.weathers", WeathersServiceConfiguration)
    .addArgument(process.env.WEATHER_API_KEY)
    .addArgument(process.env.WEATHER_API_BASE_URL);

container.register("services.weathers", WeathersService)
    .addArgument(new Reference("configurations.weathers"));

container.register("configurations.shops", ShopsServiceConfiguration)
    .addArgument(process.env.SHOPS_API_BASE_URL)
    .addArgument(process.env.SHOPS_CLIENT_ID)
    .addArgument(process.env.SHOPS_API_KEY);

container.register("services.shops", ShopsService)
    .addArgument(new Reference("configurations.shops"));

/* Setup the controllers */

app.use("/", (req, res, next) => {
    (req as any).container = container;

    next();
});

app.use("/cities", citiesController);

/* Setup Swagger */

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* Run the app */

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});