javascript: (function () {
  const meetupData = JSON.parse(document.querySelectorAll("script[type='application/ld+json']")[1].innerHTML);
  function toYYYYMMDD(date) {
    return new Date(date).toISOString().split("T")[0];
  }
  const extractedData = {
    name: meetupData.name,
    date: toYYYYMMDD(meetupData.startDate),
    locationName: meetupData.location.name,
    url: meetupData.url,
  };
  // const formattedData = JSON.stringify(extractedData).replace(/"([^"]+)":/g, "$1:");
  const formattedData = `\t${extractedData.name}\t${extractedData.locationName}\t\t\t\t\t${extractedData.date}\t${extractedData.url}`;
  window.prompt("", formattedData);
})();
