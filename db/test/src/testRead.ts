import GpsDataModel from "./gpsdata";
import GpsDataControlModel from "./gpsdata-control";

const deviceId = "2";
//Feb 1 to Feb 10
const startDate = "2024-02-03T10:30:00.177Z";
const limit = 1000;

async function readGpsDataNew() {
    const st = Date.now();
    await GpsDataModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in NEW Model: ${et - st}`)
}


async function readGpsDataOld() {
    const st = Date.now();
    await GpsDataControlModel.find({ deviceId: deviceId, gpsDate: { $gte: startDate } }, {}, { limit: limit, sort: { gpsDate: 1 } }).lean();
    const et = Date.now();
    console.log(`Elapsed in old Model: ${et - st}`)
}

export async function benchmarkReadOperation() {
    
    // readGpsDataOld();
    readGpsDataNew();
    
    // readGpsDataNew();

}