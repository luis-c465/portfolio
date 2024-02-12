> A batteries included frontend framework for building **reactive** user interfaces

> [See Docs](https://react.dev)

# Examples

```js
// Component which shows some text on the screen
export default function Component({ text }) {
 return (
  <div>
   <span>{text}</span>
  </div>
 );
}

// A counter with a button
export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

 return (
  <div>
    <button onClick={() => setCount(before => before+1)}></button>
    <span>Count: {count}</span>
  </div>
 );
}
```
