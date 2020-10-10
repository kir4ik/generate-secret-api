import crypto from 'crypto';
import {Request, Response, Router as router} from 'express';
import {getLimitedValue} from '../../common/utils';

const SECRET_SIZE_MAX = Number(process.env.SECRET_SIZE_MAX);
const SECRET_SIZE_DEFAULT = Number(process.env.SECRET_SIZE_DEFAULT);

const secretGeneratorRouter = router();

secretGeneratorRouter.get('/', (req: Request, res: Response) => {
  const size = getLimitedValue(req.query.size, [0, SECRET_SIZE_MAX], SECRET_SIZE_DEFAULT);
  const secret = crypto.randomBytes(size).toString('hex');

  res.json({secret});
});

export default secretGeneratorRouter;
