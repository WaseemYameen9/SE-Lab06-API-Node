const express = require('express');
const bodyparser = require('body-parser')
const db = require('./utils/db')
const app = express();
const port = 3005;
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute');
const invoiceRouter = require('./routes/invoiceRoute');
const purchaseRouter = require('./routes/purchaseHistoryRoutes');

app.use(bodyparser.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  

app.use('/api',productRouter);
app.use('/user',userRouter);
app.use('/invoice',invoiceRouter);
app.use('/purchaseHistory',purchaseRouter);




app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})