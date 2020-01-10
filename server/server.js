
import express from 'express';
import http from 'http';
import path from 'path';
import apiVersion1 from './api/api1';
import renderRouterMiddleware from '../iso-middleware/renderRoute';

require('dotenv').config();

// Express web server configuration
const app = express();
app.set('port', process.env.PORT || 8080);

// Request Handlers
const buildPath = path.join(__dirname, '../', 'build');

app.use('/', express.static(buildPath));
app.use('/api', apiVersion1);

app.get('*', renderRouterMiddleware);


// Starts the Express server on port 3000 and logs that it has started
http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server started at: http://localhost:${app.get('port')}/`);
});

module.exports = app;
