import React, { useState } from "react";
import PropTypes from "prop-types";

function AppEx() {
  const [count, setCount] = useState(0);

  function decrease() {
    setCount(count-1);
  }
  function increase() {
    setCount(count+1);
  }

  return (
    <div>
      <h1>The Number is : {count}</h1>
      <button onClick={() => increase()}>increase</button>
      <button onClick={() => decrease()}>decrease</button>
    </div>
  );
}

App.propTypes = {
  count: PropTypes.number,
}

export default AppEx;
