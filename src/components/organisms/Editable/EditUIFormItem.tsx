import React from "react";
import EditImageFormItem from "./EditImageFormItem";
import EditTextFormItem from "./EditTextFormItem";

import { EditableInputProps } from "./types";

type EditableProps = EditableInputProps & {
  type?: "image" | "text" | "textarea";
};

const EditUIFormItem = (props: EditableProps) => {
  const { type, ...others } = props;
  if (type === "image") {
    return <EditImageFormItem {...others} />;
  }
  return <EditTextFormItem type={type} {...others} />;
};

export default EditUIFormItem;
