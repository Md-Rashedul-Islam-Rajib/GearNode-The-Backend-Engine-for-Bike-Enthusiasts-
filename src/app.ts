import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to 🏍🏍🏍 GearNode 🏍🏍🏍');
});


// App routes
app.use("/api/products",);

export default app;
