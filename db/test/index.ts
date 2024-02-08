import mongoose from "mongoose";

import "./gpsdata";
import "./gpsdata-control";
import { populateRandomDataToDb } from "./testInsert";
import { benchmarkReadOperation } from "./testRead";


console.log(`${new Date().toISOString()} Test server started...`);


let mongoOptions: any = {
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 1000,
};


const mongoDbUrl = "mongodb://testuser:JI5Jou8EXyAmk9B60D6mUY6ZlevmOiOX@159.89.173.203:27017/datadb";

mongoose.connect(mongoDbUrl, mongoOptions).catch((err) => {
    console.log(`Mongo Error: ${err}`);
});


populateRandomDataToDb();
// benchmarkReadOperation();
