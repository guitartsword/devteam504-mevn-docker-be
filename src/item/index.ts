import { Router, Request, Response } from 'express';
import ItemModel from './item.model';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const items = await ItemModel.find().sort({ createdAt: -1 }).lean();
    return res.send(items)
});

router.post('/', async (req: Request, res: Response) => {
    const newItem = new ItemModel({
        amount: 0,
        ...req.body,
    });
    const item = await newItem.save().catch(e => e);
    if (item instanceof Error) {
        return res.status(400).send(item);
    }
    return res.send(item);
});

router.patch('/:id', async (req: Request, res: Response) => {
    const item = await ItemModel.findByIdAndUpdate(req.params.id, {
        $set: {
            ...req.body
        }
    })
    return res.send(item);
});

export default router;