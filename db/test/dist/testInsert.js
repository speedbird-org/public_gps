"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.populateRandomDataToDb = void 0;
const gpsdata_1 = __importDefault(require("./gpsdata"));
const gpsdata_control_1 = __importDefault(require("./gpsdata-control"));
function getRandomWholeNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
// Function to generate random data
function generateRandomData(numEntries) {
    let list = [];
    for (let i = 0; i < numEntries; i++) {
        list.push({
            deviceId: getRandomWholeNumber(1, 2),
            gpsDate: getRandomDate(new Date(2024, 1, 1), new Date(2024, 1, 10)),
            lat: getRandomNumber(11.0, 11.2),
            lon: getRandomNumber(77.4, 77.5),
        });
    }
    return list;
}
function populateRandomDataToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let index = 1; index <= 10000; index++) {
            let list = generateRandomData(1000);
            let res = yield Promise.all([
                gpsdata_1.default.insertMany(list),
                gpsdata_control_1.default.insertMany(list),
            ]);
            // list = await GpsDataControlModel.find().lean();
            console.log(`Date: ${new Date().toISOString()}  Inserted ${res[0].length} docs. index: ${index}`);
        }
    });
}
exports.populateRandomDataToDb = populateRandomDataToDb;
