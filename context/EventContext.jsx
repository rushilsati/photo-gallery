import React, { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [eventId, setEventId] = useState("");
  return (
    <EventContext.Provider value={{ eventId, setEventId }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
