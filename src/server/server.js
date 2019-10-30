const express = require('express');
const request = require('request');
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/properties', (req, res) => {
    axios
    .get("http://dev1-sample.azurewebsites.net/properties.json")
    .then(response => {
      return res.send(response.data);
    })
    .catch(err => console.log(err));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));