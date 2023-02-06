import * as React from "react";
import { Timeline } from "@mui/lab";
// import ReactDOM from "react-dom/client";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import eventsContent from "../../content/events.json";
import EventCard from "./EventCard";
import { Event } from "../../utils/types";
import { Grid } from "@mui/material";
var ReactDOM = require("react-dom");

export default function AlternateTimeline() {
  const events: Event[] = eventsContent;
  console.log(ReactDOM);
  return (
    // <p>Events</p>
    <Grid
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timeline
        sx={{ marginTop: "125px", alignItems: "center" }}
        position="alternate"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        {events.map((item, index) => (
          <TimelineItem key={index} sx={{ width: "70%" }}>
            <TimelineOppositeContent>{item.month}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {/* No connector on last item */}
              {index + 1 !== events.length && (
                <TimelineConnector sx={{ height: "200px" }} />
              )}
            </TimelineSeparator>
            <TimelineContent>
              <EventCard {...item} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
}
