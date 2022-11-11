const {Router} = require('express');
const router = Router();
const profCtrl = require("../controller/proArray.controller");


router.get('/profesionales', profCtrl.getProfessional);

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/profesionales', profCtrl.postPro);

router.put('/professionales', profCtrl.putPro);

router.delete('/professionales', profCtrl.deletePro);

module.exports = router;