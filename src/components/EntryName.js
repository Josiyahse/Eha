import React, { useState } from "react";
import {
  Row,
  JustifyContentSpaceBetween,
  Head3,
  Bold,
  PrimaryColor,
  Width,
  BgPrimary,
  BgGreen,
  Ronde,
  Padding3,
  Margine3,
  MarginLR,
  CenterContent,
  Wrap,
  WidthFull,
  WidthAuto,
} from "../style/composantStyle";

function EntryName({ setEntryName }) {
  const [entry, SetEntry] = useState("");

  function submit() {
    if (entry !== "") {
      setEntryName(entry);
      SetEntry("");
    }
  }
  function handleChange(e) {
    let value = e.target.value;
    SetEntry(value);
  }

  document.onkeydown = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className={Row + CenterContent + Wrap + "gap-3"}>
      <h3 className={Bold + PrimaryColor + Head3}>Rentrez les participants</h3>
      {/* <div className={Row + Width}> */}
        <input
          className={Width + BgPrimary + Ronde + Padding3 + MarginLR}
          type="text"
          placeholder="Nom du participant"
          value={entry}
          onChange={(e) => handleChange(e)}
        ></input>
        <button
          className={
            Bold +
            PrimaryColor +
            BgGreen +
            Ronde +
            Padding3 +
            MarginLR
          }
          onClick={submit}
        >
          AJOUTER
        </button>
      {/* </div> */}
    </div>
  );
}

export default EntryName;
