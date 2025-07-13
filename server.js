require('dotenv').config()


const express=require('express');
const cors=require('cors')
const connectDb=require('./db/db')
const app=express()
const productRoutes=require('./routes/product.route')
connectDb()

app.use(cors())
app.use(express.json());
app.use('/api/products', productRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});