const express = require('express');
const router = express.Router();

//procesamiento de archivos al servidor
const multer = require("multer");

const {index, carsList, carsCreate, carsEdit, carsStore, carsDelete, carsUpdate, register, processRegister, login, processLogin} = require('../controllers/adminController');

router.get('/',index);

const storage = multer.diskStorage{
    destination: (req,file,cb) =>{
        cb(null,"public/images/autos")
    },
    filename : (req,file,cb)=> {
        cb(null,file.fieldname + "_" + Date.now + patch.extname(originalname))
    },
}

const upload = multer({storage})

//entidad administradores

router.get('/register',register);
router.post('/register',processRegister);

router.get('/login',login);
router.post('/login',processLogin);


//entidad autos
router.get('/autos/list',carsList);

router.get('/autos/create',carsCreate);
router.post('/autos/store',upload.any(),carsStore);

router.get('/autos/edit/:id',carsEdit);
router.put('/autos/update/:id',carsUpdate);

router.delete('/autos/delete/:id',carsDelete);


module.exports = router;