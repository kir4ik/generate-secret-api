import {Router as router} from 'express';
import secretGeneratorRouter from './modules/secretGenerator/secretGeneratorRouter';

const apiRouter = router();

apiRouter.use('/secret', secretGeneratorRouter);

export default apiRouter;
