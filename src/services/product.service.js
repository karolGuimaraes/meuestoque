const { isNull } = require('../utils/commons');
const Product = require('../models/product.model');
const ByProduct = require('../models/byproduct.model');

const list = async (req, res) => {
  try {
    const products = await Product.find().populate('byproducts');
    res.send(products);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const product = await Product.findOne({_id : id}).populate('byproducts');
    if(isNull(product)) {
      return res.status(404).send({message: 'Product not found'});
    }
    res.send(product);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getByName = async (req, res) => {
  const {name} = req.params;
  try {
    const product = await Product.find({name : name}).populate('byproducts'); //Criar um index pra nome na collection Product
    if(isNull(product)) {
      return res.status(404).send({message: 'Product not found'});
    }
    res.send(product);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const product = await Product.updateOne({_id : id}, data, {new: true});

    for (const byproduct of data.byproducts) {
      const byproduct_obj = await ByProduct.updateOne({_id : byproduct._id}, byproduct, {new: true});
    }
      
    res.send(product);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Product.deleteOne({_id : id});
    res.status(200).send({message: 'Product deleted'});
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getAllByProducts = async (req, res) => {
  const {id} = req.params;
  try {
    const byproducts = await Product.findOne({_id : id}).select('byproducts').populate('byproducts');
    if(isNull(byproducts)) {
      return res.status(404).send({message: 'Product not found'});
    }
    res.send(byproducts);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

module.exports = {
  list, 
  create,
  getById,
  getByName, 
  update, 
  remove,
  getAllByProducts
}