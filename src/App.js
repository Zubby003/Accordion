import Question from "./Question";
import { useState } from "react";
import items from "./Data";

function App() {
  const [question, setQuestion] = useState(items);
  return (
    <main className="container">
      <h3>Frequently Asked Question</h3>

      <section className="info">
        {question.map((item) => {
          return <Question key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
