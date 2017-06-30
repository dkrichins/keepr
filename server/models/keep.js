import { models } from '../config/constants'
import Keeps from './keep'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  imgUrl: { type: String },
  body: { type: String, required: true },
  created: { type: Number, default: Date.now() },
  keepCount: { type: Number, default: 0 },
  shareCount: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 },
  tags: [{ type: String }],
  
  //Relations
  creatorId: { type: ObjectId, ref: models.user.name, required: true },
  vaults: [{ type: ObjectId, ref: models.vault.name }]
   
});

// schema.pre('remove', function (next){
//   Keeps.find({keepId: this._id}).remove().exec(next)
  
// })


module.exports = mongoose.model(models.keep.name, schema);