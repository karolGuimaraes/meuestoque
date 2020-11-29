const { isNull } = require('../utils/commons');
const  ByProduct = require('../models/byproduct.model');

const list = async (req, res) => {
  try {
    const byproducts = await ByProduct.find().populate('product');
    res.send(byproducts);
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
    console.log(product.byproducts)
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
  update, 
  remove
}