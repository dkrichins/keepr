import { models } from '../config/constants'
import Keeps from './keep'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created: { type: Number, default: Date.now() },

  creatorId: { type: ObjectId, ref: models.user.name, required: true },  
  keeps: [{ type: ObjectId, ref: models.keep.name }]
});

schema.pre('remove', function (next){
  Keeps.find({ keepId: this._id }).remove().exec(next)
  
})


module.exports = mongoose.model(models.vault.name, schema);