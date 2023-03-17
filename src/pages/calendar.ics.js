import ical from "ical-generator";

import { EVENTS } from "../events.ts";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "../consts";

export async function get(context) {
  const calendar = ical({ name: "Casey's Events Calendar" });

  EVENTS.forEach((event) => {
    calendar.createEvent({
      summary: `${event.emoji} ${event.name}`,
      start: event.date,
      allDay: true,
      description: event.description,
      location: event.location,
      url: SITE_URL,
    });
  });

  return {
    body: calendar.toString(),
  };
}
