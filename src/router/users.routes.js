const {Router} = require('express')
const Users = require('../services/users.service')

const userRouter = (app) =>{
  const userService = new Users();
  const router = Router();
  app.use('/users', router);

  router.get('/', async (req,res)=>{
      const result = await userService.getAll();
      res.status(200).json(result);
  })

  router.post('/', async(req, res)=>{
    const data = req.body;
    const result = await userService.create(data);
    res.status(201).json(result);
  })
}

module.exports = userRouter;