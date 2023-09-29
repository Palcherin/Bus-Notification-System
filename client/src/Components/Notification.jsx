import React from "react";
import { RxCross2, RxInfoCircled } from "react-icons/rx";

export default function Notification({ type, title, description }) {
  return (
    <div className={`notification notification__${type}`}>
      <div>
        <RxInfoCircled />
        <div>
          <div>{title}</div>
          <div>{description}</div>
        </div>
      </div>
      <RxCross2 />
    </div>
  );
}
