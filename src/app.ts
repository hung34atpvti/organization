import express from "express";
import bodyParser from 'body-parser';
import orgRouter from "./routes/orgRouter";
import ApplicationError from "./utils/errors/application-error";
import { GlobalExceptionHandler } from "./middleware/global-exception-handler";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});

app.use('/api/v1/org', orgRouter);

app.all('*', (req, res, next) => {
    next(new ApplicationError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(GlobalExceptionHandler.exceptionHandle);

export default app
