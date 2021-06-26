import React, { useState, useEffect } from "react";
import Color from "./color";
import Values from "values.js";
<script src="https://cdn.jsdelivr.net/npm/values.js"> </script>;

const App = () => {
  const [color, setColor] = useState("#8fb3f5");
  const [colorList, setColorList] = useState(new Values("#8fb3f5").all(5));

  useEffect(() => {
    setColorList(new Values(color).all(5));
  }, [color]);

  return (
    <>
      <div className="header">
        <h3 className="multicolortext"> Color Picker </h3>
        <label htmlFor="color">
          <b className="multicolortext">
            Pick your favourite color to get it's shades and tints &nbsp; &nbsp;
          </b>
        </label>
        <input
          id="color"
          name="color"
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="colors">
        {colorList.map((color, index) => {
          return <Color key={index} {...color} index={index} />;
        })}
      </div>
    </>
  );
};

export default App;
