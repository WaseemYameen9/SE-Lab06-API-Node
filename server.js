const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const invoiceRouter = require('./routes/invoiceRoute');
const purchaseRouter = require('./routes/purchaseHistoryRoutes');
app.use(bodyparser.json)
require('./utils/db')
const port = 3005;


app.use('/api',productRouter);
app.use('/user',userRouter);
app.use('/invoice',invoiceRouter);
app.use('/purchaseHistory',purchaseRouter);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})