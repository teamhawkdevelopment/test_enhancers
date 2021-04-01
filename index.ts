import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => res.send('It works!'));

app.listen(PORT, () => {
    console.log(`Server running at https://localhost:${PORT}`);
});