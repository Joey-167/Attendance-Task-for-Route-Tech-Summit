const express= require ('express');
const router= express.Router();
const authController= require("../../../../../../../../controllers/CategoryController");
const auth= require('../middleware/auth');
router.post('/',auth,categoryController.createCategory);
router.post('/',auth,categoryController.getCategories);
module.exports=router;
