const { isNull } = require('../utils/commons');
const Provider = require('../models/provider.model');

const list = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.send(providers);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const provider = await Provider.create(req.body);
    res.status(201).send(provider);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const provider = await Provider.findOne({_id : id});
    if(isNull(provider)) {
      return res.status(404).send({message: 'Provider not found'});
    }
    res.send(provider);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const provider = await Provider.updateOne({_id : id}, data, {new: true});
    res.send(provider);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await Provider.deleteOne({_id : id});
    res.status(200).send({message: 'Provider deleted'});
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