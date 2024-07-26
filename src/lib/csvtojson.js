import Papa from "papaparse";
import fs from "fs";

const eventscsv = fs.readFileSync("src/events.csv", { encoding: "utf-8" });
const eventsjson = Papa.parse(eventscsv, { header: true });
fs.writeFileSync("src/data/events.json", JSON.stringify(eventsjson.data));
