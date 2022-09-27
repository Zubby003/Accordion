import React, { useState } from "react";

const Question = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <article className="question">
      <header>
        <h2>{question}</h2>
        <button className="btn" onClick={() => setShow(!show)}>
          {show ? "-" : "+"}
        </button>
      </header>
      {show && <h3 className="answer">{answer}</h3>}
    </article>
  );
};

export default Question;
