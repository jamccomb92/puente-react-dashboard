const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  var options = {
    root: 'build',
    headers: {
      "/**": { 
        "Cache-Control": "no-store, no-cache" 
      } 
    }
  }
  res.sendFile(path.join(__dirname, options, 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));