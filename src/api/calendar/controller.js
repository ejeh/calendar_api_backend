import { google } from "googleapis";
import { success, fail, notFound } from "../../services/responses";
import dotenv from "dotenv";

dotenv.config();

const CREDENTIALS = process.env.CREDENTIALS;

const calenderId = process.env.CALENDAR_ID;

const SCOPES = "https://www.googleapis.com/auth/calendar";

const calendar = google.calendar({ version: "v3" });

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

// Insert new event to google calendar
export const insertEvent = async (req, res) => {
  const data = req.body || {};

  const event = {};
  if (data.summary) event.summary = data.summary;
  if (data.location) event.location = data.location;
  if (data.description) event.description = data.description;
  if (data.start)
    event.start = {
      dateTime: data.start,
      timeZone: "Africa/Lagos",
    };
  if (data.end)
    event.end = {
      dateTime: data.end,
      timeZone: "Africa/Lagos",
    };

  try {
    await calendar.events
      .insert({
        auth: auth,
        calendarId: calenderId,
        resource: event,
      })
      .then((result) => {
        if (!result) {
          return fail(res, 404, "Error not found");
        }
        return success(res, 200, result, "You successfully created an event");
      })
      .catch((err) => {
        fail(res, 500, `Error occured while creating event. ${err.message}`);
      });
  } catch (error) {
    console.log("error", error);
    return 0;
  }
};

// Get all the events btw two dates
export const getEvents = async (req, res) => {
  let start = "2021-02-28T09:00:00-07:00";
  let end = "2021-03-29T17:00:00-07:00";
  try {
    await calendar.events
      .list({
        auth: auth,
        calendarId: calenderId,
        timeMin: start,
        timeMax: end,
        timeZone: "Africa/Lagos",
      })
      .then((result) => {
        let items = result["data"]["items"];
        success(res, 200, items, "retrieving record(s) was successfully!");
      })
      .catch((err) =>
        fail(res, 500, `Error retrieving record(s).\r\n${err.message}`)
      );
  } catch (error) {
    console.log(`Error at getEvents --> ${error}`);
    return 0;
  }
};
