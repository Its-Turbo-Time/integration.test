import React, { useState } from "react";

interface MinutesEditorProps {
  isRecording: boolean;
}

export function MinutesEditor({ isRecording }: MinutesEditorProps) {
  const [content, setContent] = useState(`Minutes:

• `);

  return (
    <div className="relative">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your meeting minutes..."
        className="w-full min-h-[300px] bg-transparent border-none p-0 text-lg focus:outline-none focus:ring-0 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
        style={{ lineHeight: "1.8" }}
      />

      {isRecording && (
        <div className="absolute top-2 right-2">
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          >
            <span
              className="w-2 h-2 mr-1 bg-red-500 rounded-full animate-pulse"
            ></span>
            Recording
          </span>
        </div>
      )}
    </div>
  );
}
