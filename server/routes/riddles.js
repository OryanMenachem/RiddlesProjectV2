import express from 'express'; 
import get from '../CRUD/read.js';
import post from '../CRUD/create.js';
import update  from '../CRUD/update.js';
import del from '../CRUD/delete.js'




const router = express.Router();


router.get("/all", get)

router.post("/add", post)

router.put("/:id", update)

router.delete("/:id", del)
   

export default router;


 
