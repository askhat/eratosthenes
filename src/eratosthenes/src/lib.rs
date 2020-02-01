use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;
use js_sys::Array;

#[wasm_bindgen]
pub fn eratosthenes(n: usize) -> Array {
    let mut sieve = Array
        ::new_with_length(n as u32)
        .fill(&JsValue::TRUE, 0, n as u32);
    sieve.set(0, JsValue::FALSE);
    sieve.set(1, JsValue::FALSE);

    for i in 2.. 1 + (n as f64).sqrt() as usize {
        if sieve.get(i as u32) == JsValue::TRUE {
            for j in i.. {
                if i * j >= n { break }
                sieve.set(i as u32 * j as u32, JsValue::FALSE);
            }
        }
    }

    return sieve
}
