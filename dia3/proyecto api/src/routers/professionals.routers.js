const {Router} = require('express');
const router = Router();
const profCtrl = require("../controller/proArray.controller");


router.get('/profesionales', profCtrl.getProfessional);

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/profesionales', profCtrl.postPro);

router.put('/profesionales', profCtrl.putPro);

router.delete('/profesionales', profCtrl.deletePro);

module.exports = router;