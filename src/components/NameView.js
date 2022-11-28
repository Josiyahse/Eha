import React, { useEffect } from "react";
import {
  PrimaryColor,
  Padding3,
  BgWith,
  Ronde2,
  Bold,
  Row,
  Wrap,
  dropShadowXl,
} from "../style/composantStyle";

function NameView({ listName }) {
  function mapName() {
    return listName.map((name, index) => {
      return (
        <p className={PrimaryColor + Padding3 + Bold} key={index}>
          {name}
        </p>
      );
    });
  }

  useEffect(() => {
    mapName();
  }, [listName]);

  return (
    <div
      className={
        Row +
        Wrap +
        Ronde2 +
        BgWith +
        dropShadowXl +
        (listName.length === 0 ? null : "p-1")
      }
    >
      {mapName()}
    </div>
  );
}

export default NameView;
