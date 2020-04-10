const mongo=require('./config/mongo');
const PORT=mongo.port;
const app=require('./app');
app.listen(PORT ,function () {
    console.log("Server is running on Port: ", PORT);
});
