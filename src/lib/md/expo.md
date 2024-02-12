> [React Native](https://reactnative.dev/) | A framework for making mobile apps using [React](https://react.dev/) > [Expo](https://expo.dev/) | A eay to easily deploy and test [React Native](https://reactnative.dev/) apps

# React Native Examples

```js
// Component which shows some text on the screen
export default function Component({ text }) {
 return (
  <View>
   <Text>{text}</Text>
  </View>
 );
}

// A counter with a button
export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount)

 return (
  <View>
    <Button onClick={() => setCount(before => before+1)}></Button>
    <Text>Count: {count}</Text>
  </View>
 );
}
```
