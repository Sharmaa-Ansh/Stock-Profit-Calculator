import "./styles.css";
import React, { useState } from "react";
import poster from "./poster.svg";

export default function App() {
  const [verdict, setVerdict] = useState("");
  const [cmp, setCmp] = useState();
  const [omp, setOmp] = useState();
  const [qty, setQty] = useState();
  var result;
  var percent;

  function submitHandler(event) {
    event.preventDefault();
    if (cmp === undefined || omp === undefined || qty === undefined) {
      setVerdict("enter a valid value");
    } else {
      console.log(cmp);
      console.log(omp);
      console.log(qty);

      result = (cmp - omp) * qty;
      percent = ((cmp - omp) / omp) * 100;

      console.log(result);
      console.log(percent);

      if (cmp > omp) {
        setVerdict(
          "Your Portfolio is up " +
            percent +
            "% and your total gains are ₹" +
            result
        );
      } else {
        setVerdict(
          "Your Portfolio is down " +
            percent +
            "% and your total loss is ₹" +
            result
        );
      }
    }
  }

  return (
    <div className="App">
      <h1 className="heading">Stock Market Returns Calculator</h1>
      <span>
        {" "}
        <img className="image" src={poster} alt="" />
        <div className="card">
          <div>
            <input
              className="inputs"
              id="OMP"
              type="number"
              placeholder="buying price"
              onChange={(e) => {
                setOmp(parseInt(e.target.value, 10));
              }}
            />
          </div>
          <div>
            {" "}
            <input
              type="number"
              className="inputs"
              placeholder="quantity"
              onChange={(e) => {
                setQty(parseInt(e.target.value, 10));
              }}
            />
          </div>

          <div>
            {" "}
            <input
              className="inputs"
              type="number"
              placeholder="current price"
              onChange={(e) => {
                setCmp(parseInt(e.target.value, 10));
              }}
            />
          </div>
          <button onClick={submitHandler}>SUBMIT</button>
        </div>
      </span>

      <div className="verdict">{verdict}</div>
    </div>
  );
}
