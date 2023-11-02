A simple texto to json true.
----

Deployed in: https://text-to-json-true.vercel.app/

###### Anything goes:
```
- a, b, c
- "a, "b", "c"
- [ a, b , c ]
- { a, b , c }
- a: 'z', b: 'x', c: 'w'
```
###### Gives: 
```
{
  "a": true,
  "b": true,
  "c": true
}
```
