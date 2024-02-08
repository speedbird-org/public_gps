import GpsDataModel from "./gpsdata";
import GpsDataControlModel from "./gpsdata-control";

function getRandomWholeNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

function getRandomDate(start: Date, end: Date): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Function to generate random data
function generateRandomData(numEntries: number): any {
    let list: any = [];
    for (let i = 0; i < numEntries; i++) {
        list.push({
            deviceId: getRandomWholeNumber(1, 2),
            gpsDate: getRandomDate(new Date(2024, 1, 1), new Date(2024, 1, 10)),
            lat: getRandomNumber(11.0, 11.2),
            lon: getRandomNumber(77.4, 77.5),
        })
    }
    return list;
}

export async function populateRandomDataToDb() {

    for (let index = 1; index <= 10000; index++) {

        let list = generateRandomData(1000);
        let res = await Promise.all([
            GpsDataModel.insertMany(list),
            GpsDataControlModel.insertMany(list),
        ]);

        // list = await GpsDataControlModel.find().lean();
        console.log(`Date: ${new Date().toISOString()}  Inserted ${res[0].length} docs. index: ${index}`);
    }

}

