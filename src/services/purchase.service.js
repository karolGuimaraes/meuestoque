const { isNull } = require('../utils/commons');
const Purchase = require('../models/purchase.model');

const list = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.send(purchases);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);
    res.status(201).send(purchase);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const purchase = await Purchase.findOne({_id : id});
    if(isNull(purchase)) {
      return res.status(404).send({message: 'Purchase not found'});
    }
    res.send(purchase);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const purchase = await Purchase.updateOne({_id : id}, data, {new: true});
    res.send(purchase);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Purchase.deleteOne({_id : id});
    res.status(200).send({message: 'Purchase deleted'});
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