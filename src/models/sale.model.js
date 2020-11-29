const mongoose = require('../database');
const uniqueValidator = require('mongoose-unique-validator');

const SaleModel = new mongoose.Schema({
  date: {
    type: Date, 
    default: Date.now
  },
  customer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Customer", 
  },
  items: [{
    byproduct: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "ByProduct",
      required: true 
    },
    quantity:  {
      type: Number, 
      required: true 
    },
    price: {
      type: Number, 
      required: true 
    },
  }],
  status: {
    type: String,
    enum: ['Aberto', 'Aguardando Pagamento', 'Pago', 
          'Enviado', 'Finalizado', 'Cancelado'],
    default: 'Aberto'
  },
  payment: [{
    type: {
      type: String,
      enum: ['Dinheiro', 'Transfêrencia', 'Débito', 'Crédito'],
      default: 'Dinheiro'
    },
    value: {
      type: Number, 
      required: true 
    },
    ispaid: { type: Boolean, default: false },
  }],
  note: String,
  deliveryfee: Number,
  freight: Number,
  trackingcode: String,
});

SaleModel.plugin(uniqueValidator, { message: '{PATH} already exists!' });

const Sale = mongoose.model('Sale', SaleModel);

module.exports = Sale;
