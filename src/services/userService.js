const express = require('express');
const User = require('../models/userModel');

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

exports.list = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send('Error');
  }
};