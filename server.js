const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// MongoDB connection
mongoose.connect('mongodb+srv://indukin:cqTmerndIyqHw8rY@cluster0.dkb1w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Product Model
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});
const Product = mongoose.model('Product', productSchema);

// Routes
// Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Create a new product
app.post('/api/products', async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a product
app.put('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price }, { new: true });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a product
app.delete('/api/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).send('Product deleted');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
