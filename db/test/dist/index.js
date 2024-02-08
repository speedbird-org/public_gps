"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require("./gpsdata");
require("./gpsdata-control");
const testInsert_1 = require("./testInsert");
console.log(`${new Date().toISOString()} Test server started...`);
let mongoOptions = {
// reconnectTries: Number.MAX_VALUE,
// reconnectInterval: 1000,
};
const mongoDbUrl = "mongodb://testuser:JI5Jou8EXyAmk9B60D6mUY6ZlevmOiOX@159.89.173.203:27017/datadb";
mongoose_1.default.connect(mongoDbUrl, mongoOptions).catch((err) => {
    console.log(`Mongo Error: ${err}`);
});
testInsert_1.populateRandomDataToDb();
// benchmarkReadOperation();
