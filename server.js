import express from 'express';
import mongoose from 'mongoose';
import { userRoutes } from './routes/user.routes.js';
import { productRoutes } from './routes/products.routes.js';
import { cartRoutes } from './routes/cart.routes.js';

const app = express();
// Add this line to parse JSON bodies
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`);
})

mongoose.connect('mongodb+srv://shoppyGlobe:rokCe1aJVZ63YKO3@cluster0.4rntlkq.mongodb.net/') //cloud atlas
.then(() => {
    console.log(`db connected succesfully`);
})
.catch(err => {
    console.log(`caught an error : ${err}`);
});

app.get("/", (req, res) => {
    res.send("Welcome !");
});

productRoutes(app);
userRoutes(app);
cartRoutes(app);