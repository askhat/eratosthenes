import React, { useState, useEffect } from "react";
import { eratosthenes as E } from "./eratosthenes/Cargo.toml";
import { Knobs } from "./Knobs";

export function Sieve() {
  let [grid, setGrid] = useState([]);
  let [rowSize, setRowSize] = useState(31);
  let [sieveSize, setSieveSize] = useState(1001);

  useEffect(() => {
    let numbers = E(sieveSize).map((prime, value) => ({ prime, value }));
    let rows = [];
    for (let i = 0; i <= numbers.length; i += rowSize) {
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
          {grid.map(row => (
            <tr key={row.toString()}>
              {row.map(({ prime, value }) => (
                <td key={value} style={{ background: prime && "black" }}>
                  <span style={{ color: prime && "white" }}>{value}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
