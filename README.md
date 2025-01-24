## Understanding React's Functional `setState`

In React, you can use the functional form of `setState` to update state based on the previous state. This form is particularly useful when your new state depends on the previous one. For example:

```javascript
setCurrentProject((prev) => (prev + 1) % projects.length);
```

## How JavaScript's `map` Function Works

The `map` function in JavaScript is used to create a new array by applying a transformation to each element of the original array. It automatically provides three arguments to the callback function:

1. **Element**: The current element being processed.
2. **Index**: The position of the current element in the array.
3. **Array**: The original array being mapped (optional).

### Example:
```javascript
const fruits = ["Apple", "Banana", "Cherry"];
const fruitList = fruits.map(function (fruit, index) {
  return <li key={index}>{fruit}</li>;
});
```

All the elements returned from the callback function are put in a list and returned as the output of the map function



## Understanding React State and Re-renders

### When Does React Re-render a Component?
React re-renders a component whenever the **function used to update the state** (like `setState`) is called, **even if the state value remains the same**. This is because React assumes that the act of calling the updater function could mean an intentional change.

---

### What Happens If You Set State to the Same Value?
React **will re-render** the component even if you call the state update function with the same value as the current state. However, React optimizes the rendering process and does not make unnecessary changes to the DOM if the actual output remains the same.

#### Example:
```javascript
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(0); // React will re-render, even though the state is already 0
};
```


## Understanding React's `useEffect` Hook

### What is `useEffect`?
`useEffect` is a React Hook that allows you to run **side effects** in your component. Side effects include:
- Fetching data from an API.
- Setting up subscriptions (e.g., WebSocket or event listeners).
- Managing timers or intervals.

---

### How Does It Work?
`useEffect` takes **two arguments**:
1. A **callback function**: This is the code that runs as the side effect.
2. A **dependency array**: A list of variables that React watches for changes. The effect runs based on this array.

#### Behavior Based on the Dependency Array:
- **Empty Array (`[]`)**: The effect runs **only once** when the component mounts (e.g., on page load or refresh).
- **List of Dependencies ([`var1`, `var2`])**: The effect runs **whenever one of the dependencies changes**.
- **No Dependency Array**: The effect runs **after every render**, which is often unnecessary and inefficient.

---

### Example:
#### Run Once (on Component Mount):
```javascript
useEffect(() => {
  console.log("Component mounted!");
}, []); // Runs only once



