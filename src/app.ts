import express, {
  json,
  urlencoded,
  Application,
  Request,
  Response,
  NextFunction,
} from 'express';
import morgan from 'morgan';
import routes from './handlers/routes';

/*
  App Configuration
*/

const app: Application = express();

/*
  Middlewares
*/

// Logging Middleware
app.use(morgan('combined'));

// Expose running mode in res.locals
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.locals.env = app.get('env');
  next();
});

// Body parser middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use(routes);

export default app;
