import React from "react";
import {
  Row,
  Bold,
  PrimaryColor,
  Head3,
  JustifyContentLeft,
} from "../style/composantStyle";
import CircleChoice from "./CircleChoice";

const SelectNumber = ({ max, setGroupSize }) => {
  return (
    <div className={Row + JustifyContentLeft + "gap-10"}>
      <h3 className={Head3 + Bold + PrimaryColor}>Taille des groupes</h3>
      <CircleChoice max={max} setGroupSize={setGroupSize}></CircleChoice>
    </div>
  );
};

export default SelectNumber;
