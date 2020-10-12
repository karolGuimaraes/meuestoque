const express = require('express');
const Product = require('../models/productModel');
const ObjectId = require('mongodb').ObjectId;

exports.list = async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.create = async (req, res) => {
  const {code} = req.body;
  try {
    if(await Product.findOne({code})) {
      return res.status(400).send({'error': 'Product alredy exists!'});
    }
    const product = await Product.create(req.body);
    res.status(201).send(product);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.getById = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await Product.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Product not found'});
    }
    const product = await Product.findOne({"_id" : ObjectId(id)});
    res.send(product);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.getByName = async (req, res) => {
  const {name} = req.params;
  try {
    if(!await Product.findOne({"name" : name})) {
      return res.status(400).send({'error': 'Product not found'});
    }
    const product = await Product.findOne({"name" : name});
    res.send(product);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    if(!await Product.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Product not found'});
    }
    const product = await Product.updateOne({"_id" : ObjectId(id)}, data);
    res.send(product);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.delete = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await Product.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Product not found'});
    }
    await Product.deleteOne({"_id" : ObjectId(id)});
    res.status(200).send('X');
  } catch (err) {
    res.status(500).send('Error');
  }
};