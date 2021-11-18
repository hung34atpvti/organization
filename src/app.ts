import express from "express";
import bodyParser from 'body-parser';
import orgRouter from "./routes/orgRouter";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

app.use('/api/v1/org', orgRouter);

export default app
