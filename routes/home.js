const express=require('express');
// Router created.
const router=express.Router();
const controller=require('../controller/home_controller');
// For home the home controller is passed to the get function.
router.get('/',controller.boot);
// For creating and deleting respective home controllers are passed.
router.post('/create',require('../controller/createTask_controller').create);
router.post('/delete',require('../controller/deleteTask_controller').delete);
module.exports=router;
