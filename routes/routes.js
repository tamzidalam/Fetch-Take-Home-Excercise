import express from 'express'
import {allReceipts, receiptProcess,getPoints } from '../controllers/receipts.js';


const router= express.Router();


// Route to retrieve all receipts
router.get('/process',allReceipts)

// Route to process a new receipt
router.post('/process',receiptProcess)

// Route to get points for a specific receipt
router.get('/:id/points',getPoints)

export default router;
