import React, { useState, useEffect } from "react";
import "./App.css";
import SelectNumber from "./components/SelectNumber";
import EntryName from "./components/EntryName";
import NameView from "./components/NameView";
import GroupeView from "./components/GroupeView";
import {
  Row,
  Column,
  Head1,
  Bold,
  JustifyContentCenter,
  PrimaryColor,
  Wrap,
  text,
} from "./style/composantStyle";

function App() {
  const [max, setMax] = useState();
  const [entryName, setEntryName] = useState();
  const [listName, setListName] = useState([]);
  const [groupeSize, setGroupSize] = useState(2);

  useEffect(() => {
    let listLength = listName.length + 1;
    if (parity(listLength)) {
      let halfListLength = listLength / 2;
      let maxSize = foundLength(halfListLength);
      setMax(maxSize);
    } else {
      let halfListLength = (listLength - 1) / 2;
      let maxSize = foundLength(halfListLength);
      setMax(maxSize);
    }
  }, [listName]);

  useEffect(() => {
    if (entryName !== "" && entryName !== undefined) {
      if (listName !== undefined) {
        setListName((preValue) => {
          if (preValue !== undefined) {
            return [...preValue, entryName];
          } else {
            return [...entryName];
          }
        });
      }
    }
  }, [entryName]);

  function parity(number) {
    let response = false;
    const PARITY = number % 2;
    if (PARITY === 0) {
      response = true;
    }
    return response;
  }

  function foundLength(length) {
    switch (length) {
      case 10:
        return 10;
      case 9:
        return 9;
      case 8:
        return 8;
      case 7:
        return 7;
      case 6:
        return 6;
      case 5:
        return 5;
      case 4:
        return 4;
      case 3:
        return 3;
      case 2:
        return 2;
      default:
        if (length > 10) {
          return 10;
        } else {
          return 2;
        }
    }
  }

  return (
    <div className=" w-screen sm:h-full px-5 pt-3 lg:h-screen md:h-screen xl:h-screen xl:px-20 xl:pt-10  bg-[#FAF5F0]">
      <div className={Column + JustifyContentCenter + "gap-10"}>
        <div className={Row + JustifyContentCenter}>
          <h1 className={Head1 + Bold + PrimaryColor}>Tirage aux sorts</h1>
        </div>
        <div className={Row + JustifyContentCenter + Wrap}>
          <p className={PrimaryColor + text}>
            Bonjour 😁, ce petit programme vous permet de faire des groupes
            entre amis et camarades de classe. Il arrive bien souvent que l'on
            doive faire des groupes, mais que l'on se sente mal à l'aise de
            s'introduire dans un groupe d'amis ou tout simplement de proposer à
            des gens de nous rejoindre. La solution que j'ai développée vous
            permet de faire des groupes en fonction de vos besoins. Vous pouvez
            faire des groupes de 2 à 9 avec un minimum de 4 personnes.
          </p>
        </div>
        <EntryName setEntryName={setEntryName} />
        <NameView listName={listName} />
        <SelectNumber max={max} setGroupSize={setGroupSize} />
        <GroupeView
          listName={listName}
          groupeSize={groupeSize}
          setListName={setListName}
          setGroupSize={setGroupSize}
        />
      </div>
    </div>
  );
}

export default App;
