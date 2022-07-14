import React from "react";

function Paragraph({ text }) {
  return (
    <>
      {text.map((item, idx) => {
        return (
          <p key={idx} className="result">
            {item}
          </p>
        );
      })}
    </>
  );
}

export default Paragraph;
