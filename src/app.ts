import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import routes from './handlers/routes';

/*
  App Configuration
*/

const app = express();

/*
  Middlewares
*/

// Logging Middleware
app.use(morgan('combined'));

// Expose running mode in res.locals
app.use((_req, res, next) => {
  res.locals.env = app.get('env');
  next();
});

// Body parser middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use(routes);

export default app;
