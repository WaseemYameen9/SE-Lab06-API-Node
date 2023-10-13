const express = require('express');
const router = express.Router();
const purchaseHistoryController = require('../controllers/purchaseHistoryController');

router.post('/purchaseHistory',purchaseHistoryController.purchase);
router.get('/purchaseHistory',purchaseHistoryController.getAllPurchaseHistory);
router.put('/purchaseHistory/:id',purchaseHistoryController.updatePurchaseHistory);
router.delete('/purchaseHistory/:id',purchaseHistoryController.deletePurchaseHistory);


module.exports = router;