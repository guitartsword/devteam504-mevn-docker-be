import { Router, Request, Response } from 'express'
import ItemModel from '../item/item.model';

const router = Router();

router.get('/:itemName', async (req: Request, res: Response) => {
    const { itemName } = req.params;
    const query = { name: itemName, };
    const transactions = await ItemModel.find(query).lean();
    if (transactions.length < 0) {
        return res.send({
            transactions,
            total: 0
        })
    }
    const totalRecords = await ItemModel.aggregate([
        {
            $match: query
        },
        {
            $group: {
                _id: '$name',
                total: { $sum: '$amount' }
            }
        }
    ]);

    const total = totalRecords[0]?.total || 0;

    return res.send({
        transactions, total
    });
});

export default router;