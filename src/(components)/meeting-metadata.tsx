import React, { useState, useEffect } from "react";
import { CalendarIcon, ClockIcon } from "lucide-react";

export function MeetingMetadata() {
  const [title, setTitle] = useState("");
  const [date] = useState(new Date());

  useEffect(() => {
    // Generate default title based on date if no title set
    if (!title) {
      setTitle(
        `${date.toLocaleDateString("en-US", {
          month: "numeric",
          day: "numeric",
          year: "2-digit",
        })} - Meeting`,
      );
    }
  }, [date]);

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-2xl font-semibold bg-transparent border-none p-0 w-full focus:outline-none focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500"
        placeholder="Untitled Meeting"
      />

      <div
        className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400"
      >
        <div className="flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1" />
          {date.toLocaleDateString("en-US", {
            weekday: "short",
            month: "numeric",
            day: "numeric",
          })}
        </div>
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1" />
          {date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
}
