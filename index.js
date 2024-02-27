import express from 'express';
import bodyParser from 'body-parser'



import receiptRoutes from './routes/routes.js'

const app= express();
const PORT=5001;

app.use(bodyParser.json()); // this tells us that JSON data is gonna be used for the whole app.
 
app.use('/receipts',receiptRoutes) // All the routes will start from /receipts


app.get('/',(req,res) =>{
    res.send('Welcome to te Receipt Processor Challenge')
});

app.listen(PORT,() => 
    console.log(`Server Running on port: http://localhost:${PORT}`)
);



