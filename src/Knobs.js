import React from "react";

export function Knobs({
  sieveSize,
  rowSize,
  onChangeSieveSize,
  onChangeRowSize
}) {
  return (
    <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column" }}>
      <label>Sieve Size</label>
      <div>
        <button onClick={() => onChangeSieveSize(sieveSize - 1)}>-</button>
        <input
          value={sieveSize}
          onChange={e => onChangeSieveSize(Math.max(2, Number(e.target.value)))}
        />
        <button onClick={() => onChangeSieveSize(sieveSize + 1)}>+</button>
      </div>
      <label>Row Size</label>
      <div>
        <button onClick={() => onChangeRowSize(rowSize - 1)}>-</button>
        <input
          value={rowSize}
          onChange={e => onChangeRowSize(Math.max(1, Number(e.target.value)))}
        />
        <button onClick={() => onChangeRowSize(rowSize + 1)}>+</button>
      </div>
    </form>
  );
}
