import express from "express";
import {
  getProductTransactions,
  getProductTransactionById,
  createProductTransaction,
  updateProductTransaction,
  deleteProductTransaction,
} from "../controllers/ProductTransactionController.js";

const router = express.Router();

router.get('/product-transactions', getProductTransactions);
router.get('/product-transactions/:id', getProductTransactionById);
router.post('/product-transactions', createProductTransaction);
router.patch('/product-transactions/:id', updateProductTransaction);
router.delete('/product-transactions/:id', deleteProductTransaction);

export default router;
