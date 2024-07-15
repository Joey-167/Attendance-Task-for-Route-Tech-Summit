const express= require ('express');
const router= express.Router();
const authController= require("../../../../../../../../controllers/taskController");
const auth= require('../middleware/auth');
router.post('/',auth,taskController.createTask);
router.post('/',auth,taskController.getTasks);
module.exports=router;