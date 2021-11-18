import express from 'express';

const orgRouter = express.Router();

orgRouter
    .route('/')
    .get(async (req, res) => {
        res.send('Hello from ORG')
    });

export default orgRouter;