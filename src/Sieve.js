import React, { useState, useEffect } from "react";
import { eratosthenes } from "./Eratosthenes";
import { Knobs } from "./Knobs";

export function Sieve() {
  let [grid, setGrid] = useState([]);
  let [rowSize, setRowSize] = useState(6);
  let [sieveSize, setSieveSize] = useState(100);

  useEffect(() => {
    let numbers = eratosthenes(sieveSize).map((prime, value) => ({
      prime,
      value
    }));
    let rows = [];
    for (let i = 2; i <= numbers.length; i += rowSize) {
      rows.push(numbers.slice(i, i + rowSize));
    }
    setGrid(rows);
  }, [rowSize, sieveSize]);

  return (
    <div style={{ display: "flex" }}>
      <Knobs
        sieveSize={sieveSize}
        rowSize={rowSize}
        onChangeSieveSize={setSieveSize}
        onChangeRowSize={setRowSize}
      />
      <table>
        <tbody>
          {grid.map((row, i) => (
            <tr key={i}>
              {row.map(({ prime, value }) => (
                <td key={value} style={{ background: prime ? "red" : "white" }}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
