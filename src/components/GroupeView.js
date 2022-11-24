import React, { useState, useEffect } from "react";
import Group from "./Group";
import {
  Row,
  Bold,
  JustifyContentCenter,
  Padding3,
  BgWith,
  Ronde2,
  JustifyContentStart,
  BgGreen,
  BgRed,
  Ronde,
  Margine3,
  Wrap,
  dropShadowXl,
} from "../style/composantStyle";

const GroupeView = ({ listName, groupeSize, setListName, setGroupSize }) => {
  let saveListName = listName;
  let listSize = listName.length;
  const [grouped, setGrouped] = useState([]);

  useEffect(() => {}, [grouped]);

  function modulo(listSize, groupSize) {
    let rest = listSize % groupSize;
    if (rest === 0) {
      return (rest = {
        isModulo: true,
        rest: rest,
      });
    } else {
      return (rest = {
        isModulo: false,
        rest: rest,
      });
    }
  }

  function splitList() {
    let theModulo = modulo(listSize, groupeSize);
    let saveSize = listSize;
    let saveList = saveListName.slice(theModulo.rest, listSize);
    let restLength = theModulo.rest;
    let newListSize = saveList.length;
    let numberGroupe = (newListSize - restLength) / groupeSize;
    for (let i = 0; i < numberGroupe; i++) {
      let tempTable = [];
      for (let j = 0; j < groupeSize; j++) {
        if (saveSize > restLength) {
          let randomItem = Math.floor(Math.random() * saveSize) + 1;
          let preItem = saveListName.slice(0, randomItem - 1);
          let item = saveListName.slice(randomItem - 1, randomItem);
          let postItem = saveListName.slice(randomItem, saveSize);
          tempTable = tempTable.concat(item);
          saveListName = preItem.concat(postItem);
          saveSize = saveListName.length;
        }
        if (tempTable.length === groupeSize) {
          if (i >= numberGroupe - 1) {
            let endRest = saveListName.length;
            if (endRest === 0) {
              setGrouped((preValue) => {
                return [...preValue, tempTable];
              });
            } else if (endRest === 1) {
              tempTable = tempTable.concat(saveListName);
              setGrouped((preValue) => {
                return [...preValue, tempTable];
              });
            } else if (endRest > 1) {
              setGrouped((preValue) => {
                return [...preValue, tempTable, saveListName];
              });
            }
          } else {
            setGrouped((preValue) => {
              return [...preValue, tempTable];
            });
          }
        }
      }
    }
  }

  function launch() {
    if (listSize < 4) {
      alert("Il faut minimum  4 personnes");
    } else {
      setGrouped([]);
      splitList();
    }
  }
  function clean() {
    setListName([]);
    setGrouped([]);
    setGroupSize(2);
  }

  function mapGroupe() {
    return grouped?.map((groupe, index) => {
      return <Group key={index} groupe={groupe} />;
    });
  }

  return (
    <div className={dropShadowXl}>
      <div className={Row + JustifyContentCenter}>
        <button
          className={Bold + Padding3 + BgGreen + Ronde + Margine3}
          onClick={launch}
        >
          GROUPER
        </button>
        <button
          className={Bold + Padding3 + BgRed + Ronde + Margine3}
          onClick={clean}
        >
          EFFACER
        </button>
      </div>
      <div
        className={
          "flex flex-wrap " +
          Ronde2 +
          BgWith +
          JustifyContentStart +
          Wrap +
          Margine3
        }
      >
        {mapGroupe()}
      </div>
    </div>
  );
};

export default GroupeView;
