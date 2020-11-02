const { isNull } = require('../utils/commons');
const Invoice = require('../models/invoice.model');

const list = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.send(invoices);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).send(invoice);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const invoice = await Invoice.findOne({_id : id});
    if(isNull(invoice)) {
      return res.status(404).send({message: 'Invoice not found'});
    }
    res.send(invoice);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const invoice = await Invoice.updateOne({_id : id}, data, {new: true});
    res.send(invoice);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Invoice.deleteOne({_id : id});
    res.status(200).send({message: 'Invoice deleted'});
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