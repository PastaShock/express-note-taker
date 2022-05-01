const express = require('express');

const api = require('./routes/api');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}))

app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);
app.use(routes);

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});