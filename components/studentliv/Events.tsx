'use client';

import * as React from "react";
import { useContext } from "react";
import eventsContent from "../../content/events.json";
import EventCard from "./EventCard";
import { Event } from "../../utils/types";
import { MobileStateContext } from "../../contexts/MobileContexts";

export default function AlternateTimeline() {
  const { isMobile, isIpad, isDesktop } = useContext(MobileStateContext);
  const events: Event[] = eventsContent;

  return (
    <div className="flex w-full items-center justify-center">
      {isMobile ? (
        <div className="flex items-center flex-col justify-center w-full">
          {events.map((item, index) => (
            <div className="m-10 w-[70%]" key={index}>
              <EventCard {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[125px] flex flex-col items-center w-full max-w-6xl">
          {events.map((item, index) => (
            <div
              key={index}
              className={`flex w-full items-start mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Opposite Content (Month) */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <p className="text-lg font-medium">{item.month}</p>
              </div>

              {/* Timeline Separator */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
                {index + 1 !== events.length && (
                  <div className="w-0.5 h-[200px] bg-border" />
                )}
              </div>

              {/* Timeline Content (EventCard) */}
              <div className={`flex-1 ${index % 2 === 0 ? 'pl-8 -mt-20' : 'pr-8 -mt-20'}`}>
                <EventCard {...item} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
