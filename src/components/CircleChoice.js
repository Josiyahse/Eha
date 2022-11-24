import React, { useState, useEffect } from "react";
import {
  Row,
  Ronde,
  BgGreen,
  BgWith,
  Bold,
  Wrap,
  ItemCenter,
  BgRed,
  PrimaryColor,
  dropShadowXl,
} from "../style/composantStyle";

function CircleChoice({ max, setGroupSize }) {
  const LIST = [2, 3, 4, 5, 6, 7, 8, 9];
  const [selectNumber, setSelectNumber] = useState(2);
  function handleClick(number) {
    setGroupSize(number);
    setSelectNumber(number);
  }

  useEffect(() => {
    if (max === 2) {
      setSelectNumber(2);
    }
  }, [max]);

  function Circle() {
    return LIST.map((number) => {
      return (
        <button
          className={
            Row +
            ItemCenter +
            Ronde +
            Bold +
            PrimaryColor +
            (number === selectNumber ? BgGreen : null) +
            (number > max ? BgRed : BgWith) +
            dropShadowXl +
            "px-3"
          }
          key={number}
          onClick={() => {
            handleClick(number);
          }}
          {...(number > max ? { disabled: true } : null)}
        >
          {number}
        </button>
      );
    });
  }
  return <div className={Row + Wrap + "gap-7"}>{Circle()}</div>;
}

export default CircleChoice;
