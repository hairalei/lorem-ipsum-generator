import React, { useState } from "react";
import data from "./data";
import Paragraph from "./Paragraph";

function App() {
  const [text, setText] = useState([]);
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText(data.slice(0, number));
  };

  return (
    <>
      <section className="section-center">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="paragraph">Paragraphs</label>
          <input
            onChange={handleChange}
            type="number"
            name="paragraph"
            id="paragraph"
            min={1}
            max={data.length}
            value={number}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>

        <Paragraph text={text} />
      </section>
    </>
  );
}

export default App;
