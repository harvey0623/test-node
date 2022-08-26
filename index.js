const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3034;
const dotenv = require('dotenv').config({
   path: '.env.dev'
});

const knn = require('./route/knn/index.js')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cookieParser());
app.use(cors());
app.listen(port);
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/knn', knn)

app.get('/echo', (req, res) => {
   res.json({
      status: true,
      name: 'harvey',
      gender: 'male'
   })
})

app.use((req, res) => {
   res.write('<h1>Hello mock server ~</h1>');
   res.end();
});