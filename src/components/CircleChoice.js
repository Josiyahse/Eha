import React from "react";
import {
  Row,
  Ronde,
  BgGreen,
  Bold,
  Wrap,
  ItemCenter,
} from "../style/composantStyle";

function CircleChoice() {
  const LIST = [2, 3, 4, 5, 6, 7, 8, 9];

  function Circle() {
    return LIST.map((number) => {
      return (
        <div
          className={Row + ItemCenter + Ronde + Bold + BgGreen + "px-3"}
          key={number}
        >
          {number}
        </div>
      );
    });
  }
  return <div className={Row + Wrap + "gap-7"}>{Circle()}</div>;
}

export default CircleChoice;
