```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect running!');
    // Cleanup function (optional)
    return () => {
      console.log('Effect cleanup!');
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```