import ical from "ical-generator";

import { EVENTS } from "../events.ts";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../consts";

export async function get(context) {
  const calendar = ical({
    name: "CaseyWatts.com Events",
    url: `${SITE_URL}/calendar.ics`,
    prodId: {
      company: "CaseyWatts.com",
      product: "Events Calendar",
      language: "EN", // optional, defaults to EN
    },
  });

  EVENTS.forEach((event) => {
    calendar.createEvent({
      summary: `${event.emoji} ${event.name}`,
      start: event.date,
      end: event.endDate,
      allDay: true,
      description: `${event.category} ${event.cost}
${event.description}
${event.url}
via Casey's Community Calendar`,
      location: event.location,
      url: event.url,
    });
  });

  return {
    body: calendar.toString(),
  };
}
