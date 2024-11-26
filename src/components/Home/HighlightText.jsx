
import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="bg-gradient-to-b from-purple-200 via-purple-300 to-purple-400 text-transparent bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;