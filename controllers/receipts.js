import { v4 as uuidv4 } from 'uuid';
import validateJsonData from '../schema/schema.js'
import {calculatePoints} from '../utilities/points.js'


let receipts=[]
    

export const allReceipts=(req,res)=>{
    res.send(receipts)
}

export const receiptProcess = (req, res) => {
    try {
        const receipt = req.body;
        const isValid = validateJsonData(receipt);

        if (isValid) {
            const receiptID = uuidv4();

            const receiptWithID = { id: receiptID, ...receipt };

            receipts.push(receiptWithID);

            res.status(201).json({ id: receiptWithID.id });
        } else {
            res.status(400).json({ message: 'Invalid receipt data.' });
        }
    } catch (error) {
        console.error('Error processing receipt:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
  
};

export const getPoints = (req, res) => {
    try {
        const { id } = req.params;  // equivalent to const id = req.params.id;
        const receiptFound = receipts.find(receipt => receipt.id === id);
        if (!receiptFound) {
            res.status(404).json({ message: "ID not found" });
        } else {
            const total = calculatePoints(receiptFound);
            res.status(200).json({ points: total });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

