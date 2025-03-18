import React, { useState } from "react";
import { MapPinIcon, UsersIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SaveDialogProps {
  title: string;
  onSave: (data: {
    title: string;
    location: string;
    participants: string[];
  }) => void;
  onClose: () => void;
}

export function SaveDialog({
  title: initialTitle,
  onSave,
  onClose,
}: SaveDialogProps) {
  const [title, setTitle] = useState(initialTitle);
  const [location, setLocation] = useState("");
  const [participant, setParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddParticipant = () => {
    if (participant.trim()) {
      setParticipants([...participants, participant.trim()]);
      setParticipant("");
    }
  };

  const handleRemoveParticipant = (index: number) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, location, participants });
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          <h2 className="text-xl font-semibold">
            Save Meeting Details
          </h2>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Meeting Title
            </label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter meeting title"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Location
            </label>
            <div className="relative">
              <MapPinIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
              />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Add location (optional)"
                className="pl-9"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">
              Participants
            </label>
            <div className="relative">
              <UsersIcon
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
              />
              <Input
                value={participant}
                onChange={(e) => setParticipant(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAddParticipant()}
                placeholder="Add participants"
                className="pl-9"
              />
            </div>

            {participants.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {participants.map((p, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm flex items-center"
                    id={`xyw51j_${index}`}
                  >
                    {p}
                    <button
                      type="button"
                      onClick={() => handleRemoveParticipant(index)}
                      className="ml-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      id={`s1o67g_${index}`}
                    >
                      <XIcon className="h-3 w-3" id={`nc5bkz_${index}`} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit">
              Save Meeting
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
