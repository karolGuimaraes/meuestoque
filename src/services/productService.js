const { isNull } = require('../utils/commons');
const Product = require('../models/productModel');

const list = async (req, res) => {
  try {
    const products = await Product.find();
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
    const product = await Product.findOne({_id : id});
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
    const product = await Product.findOne({name : name}); //Criar um index pra nome na collection Product
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

module.exports = {
  list, 
  create,
  getById,
  getByName, 
  update, 
  remove
}