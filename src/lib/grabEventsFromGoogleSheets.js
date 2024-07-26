import Papa from "papaparse";
import fs from "fs";

const googleSheetsURL = "https://docs.google.com/spreadsheets/d/1vvoOtlCDxfh0XPxnsSEPGLut-ommJ5vyuMdk9dCDvi4/export?format=csv";

fetch(googleSheetsURL).then((response) => {
  response.text().then((eventscsv) => {
    const eventsjson = Papa.parse(eventscsv, { header: true });
    fs.writeFileSync("src/data/events.json", JSON.stringify(eventsjson.data));
  });
});
