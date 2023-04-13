import * as React from "react";
import { useContext } from "react";
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
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function AlternateTimeline() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const events: Event[] = eventsContent;

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
      {isMobile ? (
        <Grid
          container
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          {events.map((item, index) => (
            <Grid item sx={{ m: "40px", width: "70%" }} key={index}>
              <EventCard {...item} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Timeline
          sx={{ marginTop: "125px", alignItems: "center" }}
          position={isMobile ? "left" : "alternate"}
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          {events.map((item, index) => (
            <TimelineItem key={index} sx={{ width: "100%" }}>
              <TimelineOppositeContent>{item.month}</TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                {/* No connector on last item */}
                {index + 1 !== events.length && (
                  <TimelineConnector sx={{ height: "200px" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ marginTop: "-80px" }}>
                <EventCard {...item} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      )}
    </Grid>
  );
}
