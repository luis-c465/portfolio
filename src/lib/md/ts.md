> An extension of Javascript with TypeSafety. Effectively stops developers from shooting themselves in the foot. Also helps to document the codebase.

```ts
let x: number = 0; // Can be typed as a number
const y = 1; // or not :)

// 0 + 1 = 1
console.log(x + y);

// Creates an element & then appends it
const div = document.createElement("div");
// div is not typed as an HTMLDivElement
// so the IDE will show errors when accessing methods that do not exist

div.foobar; // 💥

div.textContent = "Hello World";

document.body.append(div);

// Well a function that takes in a number and returns a string
function bar(foo: number): string {
 return `${foo} bar`;
}
```
