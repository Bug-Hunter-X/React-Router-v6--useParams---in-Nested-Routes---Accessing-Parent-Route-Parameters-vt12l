```javascript
// Correct approach
function ParentRoute() {
  let { parentId } = useParams();
  return <ChildRoute parentId={parentId}/>;
}

function ChildRoute({ parentId }) {
  let { childId } = useParams();
  console.log(parentId, childId); // parentId is now accessible
  return <div>Child {childId} (Parent ID: {parentId})</div>;
}
```

This corrected code passes the `parentId` down as a prop to the `ChildRoute` component, ensuring that both parent and child route parameters are correctly accessible.