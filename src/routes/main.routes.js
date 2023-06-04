import { Router } from "express";

const router = Router()

router.get('/create-order', (req, res) => {
    res.send('order created!');
});

router.get('/capture-order', (req, res) => {
    res.send('order captured!');
});

router.get('/cancel-order', (req, res) => {
    res.send('order canceled!');
});

export default router