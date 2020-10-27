import React from "react";
import Button from "@material-ui/core/Button";

const MyButton = props => {
  return (
    <Button
      onClick={() => window.open(props.link, "_blank")}
      variant="contained"
      size="small"
      style={{ background: "#212121", color: "white" }}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
