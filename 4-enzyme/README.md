# Lesson 4: Testing React with Enzyme

Eyzyme API at https://airbnb.io/enzyme/docs/api/

Note: the example used in this lesson is taken from
https://reactjs.org/docs/lists-and-keys.html.

## Shallow vs. Mount

`shallow` calls the components render method but does not render child
components. `mount` calls the render method *and* the render method of each
child component. `mount` also calls `componentDidMount`.
