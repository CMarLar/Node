const {Router} = require('express');
const router = Router();
const profCtrl = require("../controller/professional.controller");

router.get('/', profCtrl.getStart);

router.get('/professional', profCtrl.getUser);

//router.get('/usuario/:id', profCtrl.getUserParams);

router.post('/professional', profCtrl.postUser);

router.put('/professional', profCtrl.putUser);

router.delete('/professional', profCtrl.deleteUser)

module.exports = router;