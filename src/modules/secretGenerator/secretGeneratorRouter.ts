import crypto from 'crypto';
import {Request, Response, Router as router} from 'express';

const secretGeneratorRouter = router();

secretGeneratorRouter.get('/', (req: Request, res: Response) => {
  const size = Number(req.query.size) || 32;
  const secret = crypto.randomBytes(size).toString('hex');

  res.json({secret});
});

export default secretGeneratorRouter;
