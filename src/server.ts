import express, {NextFunction, Request, Response} from 'express';
import morgan from 'morgan';
import api from './api';
import logger, {loggerstream} from './common/logger';

const app = express();

app.use(api);

app.use(
  morgan('combined', {
    skip: (req, res) => res.statusCode < 400,
    stream: loggerstream
  })
);

// eslint-disable-next-line no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    const statusCode = err.stausCode || err.code || 500;
    const message = err.message;

    res.json({message, statusCode});
  }
});

app.listen(process.env.PORT, () => {
  logger.info(`server running on ${process.env.CLIENT_API_URL}`);
});
