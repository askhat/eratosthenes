import {For, Index, render} from "solid-js/web";
import {createEffect, createMemo, createSignal, onMount} from "solid-js";

function sieve(n) {
	let arr = new Array(n + 1).fill(true);
	arr[0] = false;
	arr[1] = false;

	for (let i = 2; i <= Math.sqrt(arr.length); i++) {
		if (arr[i]) {
			for (let j = i ** 2; j <= arr.length; j += i) {
				arr[j] = false;
			}
		}
	}

	return arr;
}

function chunk(arr, size) {
	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
}

function App() {
	const [numbers, setNumbers] = createSignal([]);
	const [width, setWidth] = createSignal(50);
	const [count, setCount] = createSignal(1000);

	onMount(() => {
		setNumbers(chunk(sieve(count()), width()));
	});

	const grid = createMemo(() => {
		return chunk(sieve(count()), width());
	});

	return <>
		<label>count:
			<input type="number" value={count()} onInput={e => setCount(parseInt(e.target.value))}/>
		</label>
		<label>width:
			<input type="number" value={width()} onInput={e => setWidth(parseInt(e.target.value))}/>
		</label>
		<hr/>
		<table>
			<tbody>
			<For each={grid()}>
				{(row, rowIndex) => (<tr>
					<Index each={row}>
						{(cell, colIndex) => (<td>
							<span style={{color: cell() ? "red" : "black"}}>{width() * rowIndex() + colIndex}</span>
						</td>)}
					</Index>
				</tr>)}
			</For>
			</tbody>
		</table>
	</>;
}

render(App, document.getElementById("root"));
