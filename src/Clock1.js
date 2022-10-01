import React from "react";
import useClock from "./hooks/useClock";

export default function Clock1() {
  const [time, ampm] = useClock();
  return (
    <>
      <p>CLOCK 1</p>
      <div style={{ background: "red" }}>
        {time}
        {ampm}
      </div>
    </>
  );
}
