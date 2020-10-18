const { isNull } = require('../utils/commons');
const Sale = require('../models/sale.model');

const list = async (req, res) => {
  try {
    const sales = await Sale.find();
    res.send(sales);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);
    res.status(201).send(sale);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const sale = await Sale.findOne({_id : id});
    if(isNull(sale)) {
      return res.status(404).send({message: 'Sale not found'});
    }
    res.send(sale);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getByName = async (req, res) => {
  const {name} = req.params;
  try {
    const sale = await Sale.findOne({name : name});
    if(isNull(sale)) {
      return res.status(404).send({message: 'Sale not found'});
    }
    res.send(sale);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const sale = await Sale.updateOne({_id : id}, data, {new: true});
    res.send(sale);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Sale.deleteOne({_id : id});
    res.status(200).send({message: 'Sale deleted'});
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