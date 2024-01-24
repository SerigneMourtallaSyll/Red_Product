const express = require('express');
const router = express.Router();
const ProdCtrl = require('../controllers/hotels');

router.post('/', ProdCtrl.createHotel);
router.get('/:id', ProdCtrl.getOneHotel);
router.get('/', ProdCtrl.getAllHotels);
router.put('/:id', ProdCtrl.updateHotel);
router.delete('/:id', ProdCtrl.deleteHotel);

module.exports = router;