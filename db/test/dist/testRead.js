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
exports.benchmarkReadOperation = void 0;
const gpsdata_1 = __importDefault(require("./gpsdata"));
const gpsdata_control_1 = __importDefault(require("./gpsdata-control"));
const deviceId = "2";
//Feb 1 to Feb 10
const startDate = "2024-02-03T10:30:00.177Z";
const limit = 1000;
function readGpsDataNew() {
    return __awaiter(this, void 0, void 0, function* () {
        const st = Date.now();
        yield gpsdata_1.default.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
        const et = Date.now();
        console.log(`Elapsed in NEW Model: ${et - st}`);
    });
}
function readGpsDataOld() {
    return __awaiter(this, void 0, void 0, function* () {
        const st = Date.now();
        yield gpsdata_control_1.default.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
        const et = Date.now();
        console.log(`Elapsed in old Model: ${et - st}`);
    });
}
function benchmarkReadOperation() {
    return __awaiter(this, void 0, void 0, function* () {
        // readGpsDataOld();
        readGpsDataNew();
        // readGpsDataNew();
    });
}
exports.benchmarkReadOperation = benchmarkReadOperation;
