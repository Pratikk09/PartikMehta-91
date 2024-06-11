import React, { useEffect, useRef, useState } from "react";

export const LearnHooks = () => {
  const btRf = useRef();

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("hello");
    console.log(count);
  }, [count]);
  return (
    <React.Fragment>
    <div>
      <h1>count:{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        ref={btRf}
        style={{ margin: "10px", color: "skyblue", display: "none" }}
      >
        Add count
      </button>

      <br />
      <br />

      <button
        onClick={() => {
          btRf.current.click();
          btRf.current.style.display = "block";
        }}
        style={{ margin: "10px", color: "skyblue" }}
      >
        {" "}
        Trigger Count
      </button>
    </div>
    </React.Fragment>
  );
};
