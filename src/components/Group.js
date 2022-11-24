import React from "react";
import {
  PrimaryColor,
  Bold,
  dropShadowXl,
  Column,
  Row,
  BgGreen,
  Ronde,
  BgPrimary,
  Padding3,
  Margine3,
  BgWith,
} from "../style/composantStyle";

const Group = ({ groupe }) => {
  function mapGroupe() {
    return groupe?.map((name, index) => {
      return (
        <p className={PrimaryColor + Bold} key={index}>
          {name}
        </p>
      );
    });
  }
  return (
    <div
      className={
        Row + Padding3 + Margine3 + dropShadowXl + " gap-3 " + Ronde + BgWith
      }
    >
      <div className={BgGreen + Ronde + "w-1"}></div>
      <h1>{mapGroupe()}</h1>
    </div>
  );
};

export default Group;
