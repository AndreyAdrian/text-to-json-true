export const input = `Anything goes:

- a, b, c
- "a, "b", "c"
- [ a, b , c ]
- { a, b , c }
- a: 'z', b: 'x', c: 'w'
- a
  b
  c`;


export const output = `Any of them will give you:

{
  "a": true,
  "b": true,
  "c": true
}`;
