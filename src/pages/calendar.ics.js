import ical from "ical-generator";

import { EVENTS } from "../events.ts";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../consts";

export async function get(context) {
  const calendar = ical({
    name: "CaseyWatts.com Events",
    url: `${SITE_URL}/calendar.ics`,
  });

  EVENTS.forEach((event) => {
    calendar.createEvent({
      summary: `${event.emoji} ${event.name}`,
      start: event.date,
      allDay: true,
      description: event.description,
      location: event.location,
      url: event.url,
    });
  });

  return {
    body: calendar.toString(),
  };
}
