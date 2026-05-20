import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Syntax Marathon Ultimate Pro" },
      { name: "description", content: "Premium competitive coding typing platform with adaptive AI, advanced analytics, and a developer-dashboard UI." },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/game/index.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0a0d14", color: "#e6e9f2", fontFamily: "system-ui" }}>
      <a href="/game/index.html" style={{ color: "#6366f1" }}>Loading Syntax Marathon Ultimate Pro...</a>
    </div>
  );
}
