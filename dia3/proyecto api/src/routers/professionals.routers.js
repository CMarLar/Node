const {Router} = require('express');
const router = Router();//¿Qué es Router()? Es una extensión de las rutas de la aplicación
const profCtrl = require("../controller/proArray.controller");
//front:
// const frontCtrl = require("../index")

// router.get('/prueba', frontCtrl.getProfessionals)






//ejercicios anteriores
router.get('/profesionales', profCtrl.getProfessionals);

router.get('/profesional', profCtrl.getProfessional);

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/profesionales', profCtrl.postPro);

router.put('/profesionales', profCtrl.putPro);

router.delete('/profesionales', profCtrl.deletePro);

module.exports = router;