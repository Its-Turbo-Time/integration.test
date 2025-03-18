import React, { useState } from "react";
import { AudioRecorder } from "(components)/audio-recorder";
import { MeetingMetadata } from "(components)/meeting-metadata";
import { MinutesEditor } from "(components)/minutes-editor";
import { ActionButton } from "(components)/action-button";
import { SaveDialog } from "(components)/save-dialog";
import {
  SaveIcon,
  ShareIcon,
  ImageIcon,
  SmileIcon,
  MessageSquareIcon,
} from "lucide-react";

interface MeetingCaptureProps {
  onSaveComplete?: () => void;
}

export default function MeetingCapture({
  onSaveComplete,
}: MeetingCaptureProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [meetingTitle, setMeetingTitle] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    }) + " - Meeting",
  );

  const handleSave = () => {
    setShowSaveDialog(true);
  };

  const handleSaveComplete = (data: {
    title: string;
    location: string;
    participants: string[];
  }) => {
    setIsSaving(true);
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
      setShowSaveDialog(false);
      if (onSaveComplete) {
        onSaveComplete();
      }
    }, 1500);
  };

  const handleShare = () => {
    alert("Meeting minutes shared successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
      >
        <div className="p-4">
          <MeetingMetadata />

          <div className="mt-6">
            <MinutesEditor isRecording={isRecording} />
          </div>

          <div className="mt-6">
            <AudioRecorder
              isRecording={isRecording}
              setIsRecording={setIsRecording}
            />
          </div>
        </div>

        <div
          className="border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between"
        >
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <SmileIcon className="h-5 w-5 text-gray-500" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ImageIcon className="h-5 w-5 text-gray-500" />
            </button>
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <MessageSquareIcon
                className="h-5 w-5 text-gray-500"
              />
            </button>
          </div>

          <div className="flex space-x-2">
            <ActionButton
              icon={<SaveIcon className="h-5 w-5" />}
              onClick={handleSave}
              color="bg-indigo-600"
              isLoading={isSaving}
            />

            <ActionButton
              icon={<ShareIcon className="h-5 w-5" />}
              onClick={handleShare}
              color="bg-green-600"
            />
          </div>
        </div>
      </div>

      {showSaveDialog && (
        <SaveDialog
          title={meetingTitle}
          onSave={handleSaveComplete}
          onClose={() => setShowSaveDialog(false)}
        />
      )}
    </div>
  );
}
