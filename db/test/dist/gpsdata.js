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
    collection: "gpsdata",
    timeseries: {
        timeField: 'gpsDate',
        metaField: 'deviceId',
    }
});
const BaseMongooseModel = mongoose.model('BaseGpsData', dataSchema);
class GpsDataModel extends BaseMongooseModel {
}
exports.default = GpsDataModel;
