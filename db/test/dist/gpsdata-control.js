"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dataSchema = new Schema({
    deviceId: String,
    lat: Number,
    lon: Number,
    gpsDate: Date,
}, {
    collection: "gpsdata_control",
});
dataSchema.index({ deviceId: 1, gpsDate: 1 });
const BaseMongooseModel = mongoose.model('BaseGpsDataControl', dataSchema);
class GpsDataControlModel extends BaseMongooseModel {
}
exports.default = GpsDataControlModel;
