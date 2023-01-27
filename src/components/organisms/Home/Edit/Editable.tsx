import React from "react";
import EditableImage from "./EditableImage";
import EditableInput from "./EditableInput";

import { EditableInputProps } from "./EditableInputProps";

type EditableProps = EditableInputProps & {
  type?: "image" | "text";
};

const Editable = (props: EditableProps) => {
  const { type, ...others } = props;
  if (type === "image") {
    return <EditableImage {...others} />;
  }
  return <EditableInput {...others} />;
};

export default Editable;
