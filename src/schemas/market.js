const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: { type: String, default: "" },
  userID: { type: String, default: "" },
  spotifypremium: { type: Number, default: 0 },
  yuzowocash: { type: Number, default: 0 },
  aylikyoutube:{type: Number, default: 0},
  valorantvp:{type: Number, default: 0},
  lolrp:{type: Number, default: 0},
  nitroclassic: {type: Number, default: 0},
  nitroboostlu: {type: Number, default: 0}


});

module.exports = model("market", schema);