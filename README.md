A simple texto to json true.
----

Deployed at: https://text-to-json-true.vercel.app/

###### Anything goes:
```
- a, b, c
- "a, "b", "c"
- [ a, b , c ]
- { a, b , c }
- a: 'z', b: 'x', c: 'w'
- a
  b
  c
```
###### Any of them give: 
```
{
  "a": true,
  "b": true,
  "c": true
}
```
