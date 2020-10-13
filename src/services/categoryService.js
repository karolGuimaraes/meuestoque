const { isNull } = require('../utils/commons');
const Category = require('../models/categoryModel');

const list = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send('Error');
  }
};

const create = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const category = await Category.findOne({_id : id});
    if(isNull(category)) {
      return res.status(404).send({message: 'Category not found'});
    }
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

const getByName = async (req, res) => {
  const {name} = req.params;
  try {
    const category = await Category.findOne({name : name}); //Criar um index pra nome na collection Category
    if(isNull(category)) {
      return res.status(404).send({message: 'Category not found'});
    }
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const category = await Category.updateOne({_id : id}, data, {new: true});
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Category.deleteOne({_id: id});
    res.status(200).send({message: 'Category deleted'});
  } catch (err) {
    res.status(500).send('Error');
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