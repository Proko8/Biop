import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class Bottom extends React.Component {
  render() {
    return (
      <div className="calendar">
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
    );
  }
}
