import EVENTS from "../data/events.json" assert { type: "json" };
import Papa from "papaparse";
import fs from "fs";

const csv = Papa.unparse(EVENTS);
console.log(csv);
fs.writeFileSync("events.csv", csv);
