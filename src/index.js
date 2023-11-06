const express = require('express');
const app = express();
const port = 3000;
const routesBR = require('./service/consumet/brazilianVersion/routes');
const routesEN = require('./service/consumet/englishVersion/routes');

app.use('/', routesBR);
app.use('/', routesEN);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
