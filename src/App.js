import { useState } from "react";

import { T20, Test, T10, ODI } from "./Cricket";
import "./styles.css";

export default function App() {
  const [target, setTarget] = useState(0);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(0);
  const [format, setFormat] = useState("t20");
  const [result, setResult] = useState("");
  const overMap = {
    t20: 20,
    t10: 10,
    test: 90,
    odi: 50
  };

  const handleSubmit = () => {
    if (score >= target) {
      setResult("Match already won");
      return;
    }
    if (over < 0 || over > overMap[format]) {
      setResult("Invalid Overs");
      return;
    }
    if (format === "t20") {
      const t20 = new T20(score, over, target);
      setResult(t20.displayresult());
    } else if (format === "t10") {
      const t10 = new T10(score, over, target);
      setResult(t10.displayresult());
    } else if (format === "test") {
      const test = new Test(score, over, target);
      setResult(test.displayresult());
    } else {
      const odi = new ODI(score, over, target);
      setResult(odi.displayresult());
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "score") {
      setScore(e.target.value);
    } else if (e.target.id === "target") {
      setTarget(e.target.value);
    } else if (e.target.id === "currOver") {
      setOver(e.target.value);
    } else {
      setFormat(e.target.value);
    }
  };

  return (
    <div className="App">
      <select id="format" onChange={handleChange}>
        <option value="t20" id="t20">
          T20
        </option>
        <option value="t10" id="t10">
          T10
        </option>
        <option value="odi" id="odi">
          ODI
        </option>
        <option value="test" id="test">
          TEST
        </option>
      </select>
      <label>Enter Current Score</label>
      <input type="text" id="score" onChange={handleChange} />
      <label>Enter Current Over</label>
      <input type="text" id="currOver" onChange={handleChange} />
      <label>Enter target</label>
      <input type="text" id="target" onChange={handleChange} />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <br />
      {result}
    </div>
  );
}
