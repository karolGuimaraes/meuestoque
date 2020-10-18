const User = require('../models/user.model');
const { isNull } = require('../utils/commons');

const list = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const getById = async (req, res) => {
  const {id} = req.params;
  try {
    const user = await User.findOne({_id : id});
    if(isNull(user)) {
      return res.status(404).send({message: 'User not found'});
    }
    res.send(user);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    const user = await User.updateOne({_id : id}, data, {new: true});
    res.send(user);
  } catch (err) {
    res.status(500).send({message: err});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;
  try {
    await User.deleteOne({_id : id});
    res.status(200).send({message: 'User deleted'});
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