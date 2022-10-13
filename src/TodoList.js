import React from "react";

export const TodoList = (props) => {
  return (
    <section>
      <ul>{props.children}</ul>
    </section>
  );
};
