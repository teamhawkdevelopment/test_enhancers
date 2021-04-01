import express from 'express';
import cors from 'cors';
import weatherController from './controllers/weathers.controller';

/* Setup the app */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8000;

/* Setup the controllers */

app.use("/weathers", weatherController);

app.use("/", (req, res) => { res.send("App is working!") });

/* Run the app */

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});