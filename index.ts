import express from 'express';
import cors from 'cors';
import weathersController from './controllers/weathers.controller';
import WeathersService, { WeathersServiceConfiguration } from './services/weathers.service';
import { ContainerBuilder, Reference } from "node-dependency-injection";

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

/* Setup the controllers */

app.use("/", (req, res, next) => {
    (req as any).container = container;

    next();
});

app.use("/weathers", weathersController);

/* Run the app */

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});