const { isNull } = require('../utils/commons');
const Customer = require('../models/customer.model');

const list = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.send(customers);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const customer = await Customer.findOne({_id : id});
    if(isNull(customer)) {
      return res.status(404).send({message: 'Customer not found'});
    }
    res.send(customer);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getByName = async (req, res) => {
  const {name} = req.params;
  try {
    const customer = await Customer.find({firstname : name});
    if(isNull(customer)) {
      return res.status(404).send({message: 'Customer not found'});
    }
    res.send(customer);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const customer = await Customer.updateOne({_id : id}, data, {new: true});
    res.send(customer);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Customer.deleteOne({_id : id});
    res.status(200).send({message: 'Customer deleted'});
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