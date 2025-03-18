import React, { useState, useEffect } from "react";
import Layout from "pages/layout";
import MeetingCapture from "pages/meeting-capture";
import MeetingsList from "pages/meetings-list";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<"list" | "capture">("list");

  useEffect(() => {
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNewMeeting = () => {
    setCurrentPage("capture");
  };

  const handleSaveComplete = () => {
    setCurrentPage("list");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Layout toggleDarkMode={toggleDarkMode} darkMode={darkMode}>
        {currentPage === "list" ? (
          <MeetingsList onNewMeeting={handleNewMeeting} />
        ) : (
          <MeetingCapture onSaveComplete={handleSaveComplete} />
        )}
      </Layout>
    </div>
  );
}
