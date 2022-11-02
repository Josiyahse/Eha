import React from "react";
import "./App.css";
import CircleChoice from "./components/CircleChoice";
import {
  Row,
  Column,
  Head1,
  Bold,
  JustifyContentCenter,
  PrimaryColor,
  Head3,
  // JustifyContentSpaceBetween,
  JustifyContentLeft,
} from "./style/composantStyle";


function App() {
  return (
    <div className="xxl:container h-screen p-10 m-0  bg-[#FAF5F0]">
      <div className={Column + JustifyContentCenter + "gap-10"}>
        <div className={Row + JustifyContentCenter}>
          <h1 className={Head1 + Bold + PrimaryColor}>Tirage aux sorts</h1>
        </div>
        <div className={Row + JustifyContentCenter}>
          <p className={PrimaryColor}>
            {" "}
            Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem
            lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem
            lorem lorem lorem Lorem lorem lorem lorem lorem{" "}
          </p>
        </div>
        <div className={Row + JustifyContentLeft+"gap-10"}>
          <h3 className={Head3 + Bold + PrimaryColor}>Taille des groupes: </h3>
          <CircleChoice></CircleChoice>
        </div>
        <div className={Row + JustifyContentCenter}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className={Row + JustifyContentCenter}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className={Row + JustifyContentCenter}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
        <div className={Row + JustifyContentCenter}>
          <div>01</div>
          <div>02</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}

export default App;
