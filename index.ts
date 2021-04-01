import express from 'express';
import cors from 'cors';
import citiesController from './controllers/cities.controller';
import WeathersService, { WeathersServiceConfiguration } from './services/weathers.service';
import { ContainerBuilder, Reference } from "node-dependency-injection";
import { ShopsService, ShopsServiceConfiguration } from './services/shops.service';

/* Setup the app */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8000;

/* Setup the services */

let container = new ContainerBuilder();

container.register("configurations.weathers", WeathersServiceConfiguration)
    .addArgument("54df5407e62e6ac395c1936a2f41e78a")
    .addArgument("https://api.openweathermap.org/data/2.5");

container.register("services.weathers", WeathersService)
    .addArgument(new Reference("configurations.weathers"));

container.register("configurations.shops", ShopsServiceConfiguration)
.addArgument("https://api.yelp.com/v3")
.addArgument("VyVSP5eB6nhwg26DoSFILw")
    .addArgument("3RwvcFgcsO46vM7A2ON79ontqSMy7LDcIqH47-9oRyRm7W1mXPp-MI7kkh1eKTnoG5ELWqMycHUMKHF41cVKxNPq55ZyxDQNJULUq-_sO-dtBTLTq4DAWVVJazxmYHYx");

container.register("services.shops", ShopsService)
    .addArgument(new Reference("configurations.shops"));

/* Setup the controllers */

app.use("/", (req, res, next) => {
    (req as any).container = container;

    next();
});

app.use("/cities", citiesController);

/* Run the app */

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});