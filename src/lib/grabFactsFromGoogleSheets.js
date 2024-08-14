import Papa from "papaparse";
import fs from "fs";

const googleSheetsURL =
  "https://docs.google.com/spreadsheets/d/19UjBSDshdRayA9EaUXG65FM0FFsq7A3ttmuFkAio8c4/export?format=csv";

fetch(googleSheetsURL).then((response) => {
  response.text().then((eventscsv) => {
    const eventsjson = Papa.parse(eventscsv, { header: true });
    fs.writeFileSync("src/data/facts.json", JSON.stringify(eventsjson.data));
  });
});
