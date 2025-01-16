# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by the `useEffect` hook.  The `useEffect` hook in the original `MyComponent` runs on every render because it lacks an empty dependency array (`[]`), leading to an unintended infinite loop.  The solution demonstrates the correct usage of the dependency array to prevent this issue.