import express from 'express'; // import express to create server
import mongoose from 'mongoose'; // import mongoose for database
import { userRoutes } from './routes/user.routes.js'; // import user routes
import { productRoutes } from './routes/products.routes.js'; // import product routes
import { cartRoutes } from './routes/cart.routes.js'; // import cart routes
import dotenv from 'dotenv'; // import dotenv for saving and using JWT token securely
dotenv.config(); // configure dotnet

const app = express(); // execute express function to create an instance (app)

app.use(express.json()); // Add this line to parse JSON bodies

const PORT = 5000; // declare port of server
app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`); // start the server at port 5000
})

mongoose.connect('mongodb+srv://shoppyGlobe:rokCe1aJVZ63YKO3@cluster0.4rntlkq.mongodb.net/') //cloud alias
.then(() => {
    console.log(`db connected succesfully`); // if db connected send to console
})
.catch(err => {
    console.log(`caught an error : ${err}`); // send error to console, if any is caught
});

app.get("/", (req, res) => {
    res.send("Welcome !"); // send response for root route
});

productRoutes(app); // call product routes with app server instance
userRoutes(app); // call user routes with app server instance
cartRoutes(app); // call cart routes with app server instance