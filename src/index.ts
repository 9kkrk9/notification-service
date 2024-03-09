import express, { NextFunction, Request, Response } from 'express';
import { Logger } from './lib';

const app = express();
app.use(express.json());

const LOG = new Logger();
export const expressApp = () => {
  app.use('/health', (_req: Request, _res: Response, next: NextFunction) => {
    _res.send('Welcome to Notification Service! 🚀');
    next();
  });
  app.listen(process.env.PORT, () => {
    LOG.info(`Working! Check it out on http://localhost:${process.env.PORT}/health`);
  });
};

expressApp();
