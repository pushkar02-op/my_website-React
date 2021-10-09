import React from "react";
import { Chrono } from "react-chrono";
import { timeItems } from "../../data";

export default function Timeline() {
  return (
    <div className="timeline" style={{ width: "30vw", height: "90vh" }}>
      <Chrono
        items={timeItems}
        mode="VERTICAL"
        hideControls
        allowDynamicUpdate={true}
        cardHeight="160"
      />
    </div>
  );
}
