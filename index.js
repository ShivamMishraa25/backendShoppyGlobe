import express from 'express';
const app = express();
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://shoppyGlobe:z3DJmvXv@WvmHN2@cluster0.4rntlkq.mongodb.net/') //cloud atlas
.then(() => {
    console.log(`db connected succesfully`);
})
.catch(err => {
    console.log(`caught an error : ${err}`);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running at port : ${PORT}`);
})