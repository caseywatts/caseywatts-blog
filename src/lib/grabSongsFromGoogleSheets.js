import Papa from "papaparse";
import fs from "fs";

const googleSheetsURL = "https://docs.google.com/spreadsheets/d/1PFhLtyTR_KGy9-ZRgxt88HotarKINw5IeaqApKQ0jxA/export?format=csv";

fetch(googleSheetsURL).then((response) => {
  response.text().then((eventscsv) => {
    const eventsjson = Papa.parse(eventscsv, { header: true });
    fs.writeFileSync("src/songs.json", JSON.stringify(eventsjson.data));
  });
});
