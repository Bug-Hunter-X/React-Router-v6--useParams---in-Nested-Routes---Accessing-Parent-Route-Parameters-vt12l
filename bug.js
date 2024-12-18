In React Router Dom v6,  a common issue arises when using the `useParams` hook within a component nested deeply within the routing hierarchy.  If the parent route's parameters are also needed in the child component, directly accessing them through `useParams` in the child might lead to unexpected behavior, as `useParams` only provides parameters specific to the *current* route segment.  The parent route's parameters won't be available.

```javascript
// Incorrect approach
function ParentRoute() {
  let { parentId } = useParams();
  return <ChildRoute/>;
}

function ChildRoute() {
  let { childId } = useParams();
  // parentId is undefined here!
  console.log(parentId, childId);
  return <div>Child {childId}</div>;
}
```