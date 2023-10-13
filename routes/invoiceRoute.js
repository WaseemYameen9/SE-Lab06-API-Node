const express = require('express');
const router = express.Router();
const InvoiceController = require('../controllers/invoiceController');

router.post('/invoice',InvoiceController.createInvoice);
router.get('/invoice',InvoiceController.getAllInvoices);
router.put('/invoice/:id',InvoiceController.updateInvoice);
router.delete('/invoice/:id',InvoiceController.deleteInvoice);


module.exports = router;