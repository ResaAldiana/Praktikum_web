import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProductTransactions = async (req, res) => {
  try {
    const transactions = await prisma.productTransaction.findMany();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProductTransactionById = async (req, res) => {
  try {
    const transaction = await prisma.productTransaction.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createProductTransaction = async (req, res) => {
  const { productId, supplierId, qty, transactionType } = req.body;
  try {
    const transaction = await prisma.productTransaction.create({
      data: {
        productId: productId,
        supplierId: supplierId,
        qty: qty,
        transactionType: transactionType,
      },
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateProductTransaction = async (req, res) => {
  const { productId, supplierId, qty, transactionType } = req.body;
  try {
    const transaction = await prisma.productTransaction.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        productId: productId,
        supplierId: supplierId,
        qty: qty,
        transactionType: transactionType,
      },
    });
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteProductTransaction = async (req, res) => {
  try {
    const transaction = await prisma.productTransaction.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json({ msg: "Product transaction successfully deleted", transaction });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
