import React from "react";
import { CalendarIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Meeting {
  id: string;
  title: string;
  date: Date;
  location?: string;
  participants: string[];
}

interface MeetingsListProps {
  onNewMeeting: () => void;
}

export default function MeetingsList({ onNewMeeting }: MeetingsListProps) {
  const meetings: Meeting[] = [
    {
      id: "1",
      title: "Weekly Team Sync",
      date: new Date(),
      location: "Conference Room A",
      participants: ["John", "Sarah", "Mike"],
    },
    // Add more mock meetings as needed
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          Past Meetings
        </h2>
        <Button onClick={onNewMeeting}>
          <PlusIcon className="h-4 w-4 mr-2" />
          New Meeting
        </Button>
      </div>

      <div className="space-y-4">
        {meetings.map((meeting, index) => (
          <div
            key={meeting.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
            id={`t79u6c_${index}`}
          >
            <div
              className="flex items-start justify-between"
              id={`4qh07x_${index}`}
            >
              <div id={`cu0gvn_${index}`}>
                <h3 className="text-lg font-semibold" id={`zn5g4h_${index}`}>
                  {meeting.title}
                </h3>
                <div
                  className="flex items-center text-sm text-gray-500 mt-1"
                  id={`euud5o_${index}`}
                >
                  <CalendarIcon
                    className="h-4 w-4 mr-1"
                    id={`t07l0t_${index}`}
                  />
                  {meeting.date.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              <Button variant="outline" size="sm" id={`f7ugrf_${index}`}>
                View Details
              </Button>
            </div>

            {meeting.location && (
              <div
                className="mt-2 text-sm text-gray-500"
                id={`pj7u9j_${index}`}
              >
                Location: {meeting.location}
              </div>
            )}

            {meeting.participants.length > 0 && (
              <div
                className="mt-2 text-sm text-gray-500"
                id={`k8xfk9_${index}`}
              >
                Participants: {meeting.participants.join(", ")}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
