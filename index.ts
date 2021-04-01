import express from 'express';
import cors from 'cors';

/* Setup the app */

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = 8000;

app.get('/', (req, res) => res.send('It works!'));

/* Run the app */

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});