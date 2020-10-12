const express = require('express');
const User = require('../models/userModel');
const ObjectId = require('mongodb').ObjectId

exports.list = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.create = async (req, res) => {
  const {email} = req.body;
  try {
    if(await User.findOne({email})) {
      return res.status(400).send({'error': 'User alredy exists!'});
    }
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.getById = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await User.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'User not found'});
    }
    const user = await User.findOne({"_id" : ObjectId(id)});
    res.send(user);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    if(!await User.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'User not found'});
    }
    const user = await User.updateOne({"_id" : ObjectId(id)}, data);
    res.send(user);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.delete = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await User.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'User not found'});
    }
    await User.deleteOne({"_id" : ObjectId(id)});
    res.status(200).send('X');
  } catch (err) {
    res.status(500).send('Error');
  }
};