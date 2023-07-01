import "./App.scss";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [count, setCount] = useState(0);

  const Extras = clsx(
    "Colors__text",
    count === 10 && "Colors__text_red",
    count === -10 && "Colors__text_blue"
  );

  const operation = (type) => {
    if (type === "+" && count <= 9) {
      setCount(count + 1);
    } else if (type === "-" && count >= -9) {
      setCount(count - 1);
    } else {
      alert("stop");
    }
  };

  return (
    <div className="Colors">
      <p className={Extras}>Цифра: {count}</p>
      <button className="Colors__plus" onClick={() => operation("+")}>
        +
      </button>
      <button className="Colors__minus" onClick={() => operation("-")}>
        -
      </button>
    </div>
  );
}

export default App;
