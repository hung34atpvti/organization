import app from './app';
import serverless from "serverless-http";

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});

module.exports.handler = serverless(app);