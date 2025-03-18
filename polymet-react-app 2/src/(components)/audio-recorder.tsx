import React, { useState, useEffect } from "react";
import { MicIcon, PauseIcon, SquareIcon, PlayIcon } from "lucide-react";

interface AudioRecorderProps {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
}

export function AudioRecorder({
  isRecording,
  setIsRecording,
}: AudioRecorderProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingStatus, setRecordingStatus] = useState<
    "inactive" | "recording" | "paused"
  >("inactive");

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRecording && !isPaused) {
      interval = setInterval(() => {
        setRecordingTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording, isPaused]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingStatus("recording");
  };

  const handlePauseRecording = () => {
    setIsPaused(true);
    setRecordingStatus("paused");
  };

  const handleResumeRecording = () => {
    setIsPaused(false);
    setRecordingStatus("recording");
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    setRecordingTime(0);
    setRecordingStatus("inactive");
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <div
        className="flex flex-col sm:flex-row items-center justify-between"
      >
        <div className="flex items-center mb-4 sm:mb-0">
          <div
            className={`w-3 h-3 rounded-full mr-2 ${
              isRecording && !isPaused
                ? "bg-red-500 animate-pulse"
                : "bg-gray-400"
            }`}
          ></div>
          <span
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {recordingStatus === "inactive"
              ? "Ready to record"
              : recordingStatus === "paused"
                ? "Recording paused"
                : "Recording in progress"}
          </span>
        </div>

        <div className="flex items-center">
          <div
            className="text-lg font-mono font-medium text-gray-900 dark:text-gray-100 mr-4"
          >
            {formatTime(recordingTime)}
          </div>

          <div className="flex space-x-2">
            {recordingStatus === "inactive" ? (
              <button
                onClick={handleStartRecording}
                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                aria-label="Start recording"
              >
                <MicIcon className="h-5 w-5" />
              </button>
            ) : recordingStatus === "recording" ? (
              <>
                <button
                  onClick={handlePauseRecording}
                  className="p-3 rounded-full bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                  aria-label="Pause recording"
                >
                  <PauseIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleStopRecording}
                  className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  aria-label="Stop recording"
                >
                  <SquareIcon className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleResumeRecording}
                  className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  aria-label="Resume recording"
                >
                  <PlayIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={handleStopRecording}
                  className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  aria-label="Stop recording"
                >
                  <SquareIcon className="h-5 w-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
      >
        {isRecording
          ? "Audio is being recorded. You can pause or stop the recording at any time."
          : "Click the microphone button to start recording your meeting."}
      </div>
    </div>
  );
}
