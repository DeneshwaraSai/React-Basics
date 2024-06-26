import React from "react";

type ContainerProps = {
    styles: React.CSSProperties,
}
export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>
    This is a container property.
  </div>;
};
