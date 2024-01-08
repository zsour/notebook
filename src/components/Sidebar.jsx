import React, { useEffect, useState } from "react";
import "./style/Sidebar.css";
export default function SideBar() {
  let [categories, setCategories] = useState({});

  useEffect(() => {
    setCategories({
      Graph: { subCategories: ["A*", "Dijkstras"], expanded: false },

      Math: {
        subCategories: ["Point in polygon", "LCM", "GCD"],
        expanded: false,
      },
    });
  }, []);

  function generateCategory(key) {
    let category = categories[key];
    let jsx = [];
    for (let i = 0; i < category.subCategories.length; i++) {
      jsx.push(
        <div className="sideBarSubCategoryContainer" key={i}>
          <p className="sideBarSubCategory">{category.subCategories[i]}</p>
        </div>,
      );
    }

    return (
      <div
        className="sideBarCategoryContainer"
        style={{
          height: !category.expanded
            ? "25px"
            : `${26 * category.subCategories.length + 25}px`,
        }}
      >
        <div
          className="sideBarCategoryHeaderContainer"
          onClick={() => {
            let newValue = !categories[key].expanded;
            setCategories((prev) => {
              let tmp = prev;
              tmp[key].expanded = newValue;
              return { ...tmp };
            });
          }}
        >
          <p className="sideBarCategory">{key}</p>
          <span
            className="sideBarExtendArrow"
            style={{
              transform: !category.expanded
                ? "translateY(-50%)"
                : "translateY(-50%) rotate(90deg)",
            }}
          ></span>
        </div>
        <div
          className="sideBarSubCategories"
          style={{
            opacity: !category.expanded ? "0" : "1",
          }}
        >
          {jsx}
        </div>
      </div>
    );
  }

  function renderCategories() {
    let jsx = [];

    for (let category in categories) {
      jsx.push(generateCategory(category));
    }

    return jsx;
  }

  return (
    <div className="sideBarContainer">
      <div className="sideBarLabel">
        <p>Categories</p>
      </div>
      {renderCategories()}
    </div>
  );
}
