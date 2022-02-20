// ____________________________________________________________________________| IMPORT
import React, { Fragment } from "react";
// ____________________________________________________________________________| STYLES

// ____________________________________________________________________________| COMPONENT
const TaskAssignmentHardCoded = () => {
   const operators = [
      "Paige Spears",
      "Jesus Flores",
      "Cody Scruggs",
      "Rick Evans",
      "Brian Pittman",
      "Chad Shirey",
   ];

   const assignments = [
      "Clean glass doors in Network Control Center.",
      "Moving boxes to dumpster, general cleanup.",
      "Clean glass windows in the RF room.",
      "Vaccum Network Control Center and clean the console.",
      "Sweep and mop the RF room and NCC.",
      "Clean glass windows in NCC.",
   ];

   const makeAssignments = () => {
      TaskAssignmentHardCoded.forEach((element) => console.log(element));
   };

   return <div>Make Assignments</div>;
};
// ____________________________________________________________________________| EXPORT
export default TaskAssignmentHardCoded;
