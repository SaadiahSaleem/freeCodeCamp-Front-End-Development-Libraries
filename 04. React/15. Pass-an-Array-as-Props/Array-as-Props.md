# Pass an Array as Props

The last challenge demonstrated how to pass information from a parent component to a child component as `props` or properties. This challenge looks at how arrays can be passed as `props`. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

````html
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
````

The child component then has access to the array property `colors`. Array methods such as `join()` can be used when accessing the property.

````html
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
````

There are `List` and `ToDo` components in the code editor. When rendering each `List` from the `ToDo` component, pass in a C property assigned to an array of to-do tasks, for example `["walk dog", "workout"]`. Then access this `tasks` array in the `List` component, showing its value within the `p` element. Use `join(", ")` to display the `props.tasks` array in the `p` element as a comma-separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

### Instructions:
1. The `ToDo` component should return a single outer `div`.
2. The third child of the `ToDo` component should be an instance of the `List` component.
3. The fifth child of the `ToDo` component should be an instance of the `List` component.
4. Both instances of the `List` component should have a property called `tasks` and tasks should be of type array.
5. The first `List` component representing the `tasks` for today should have 2 or more items.
6. The second `List` component representing the `tasks` for tomorrow should have 3 or more items.
7. The `List` component should render the value from the `tasks` prop in the `p` tag.
