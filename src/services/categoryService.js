const express = require('express');
const Category = require('../models/categoryModel');
const ObjectId = require('mongodb').ObjectId;

exports.list = async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.create = async (req, res) => {
  const {name} = req.body;
  try {
    if(await Category.findOne({name})) {
      return res.status(400).send({'error': 'Category alredy exists!'});
    }
    const category = await Category.create(req.body);
    res.status(201).send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.getById = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await Category.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Category not found'});
    }
    const category = await Category.findOne({"_id" : ObjectId(id)});
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.getByName = async (req, res) => {
  const {name} = req.params;
  try {
    if(!await Category.findOne({"name" : name})) {
      return res.status(400).send({'error': 'Category not found'});
    }
    const category = await Category.findOne({"name" : name});
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.update = async (req, res) => {
  const {id} = req.params;
  const data = req.body;
  try {
    if(!await Category.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Category not found'});
    }
    const category = await Category.updateOne({"_id" : ObjectId(id)}, data);
    res.send(category);
  } catch (err) {
    res.status(500).send('Error');
  }
};

exports.delete = async (req, res) => {
  const {id} = req.params;
  try {
    if(!await Category.findOne({"_id" : ObjectId(id)})) {
      return res.status(400).send({'error': 'Category not found'});
    }
    await Category.deleteOne({"_id" : ObjectId(id)});
    res.status(200).send('X');
  } catch (err) {
    res.status(500).send('Error');
  }
};