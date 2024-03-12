import { Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { EditableInputProps } from "./types";

const editableTexttypes = {
  text: Input,
  textarea: Textarea,
};
type EditableTextProps = EditableInputProps & {
  type?: keyof typeof editableTexttypes;
};
const EditTextFormItem = (props: EditableTextProps) => {
  const { defaultValue, placeholder, ref, name, type = "text" } = props;

  const Component = editableTexttypes[type];
  return (
    <Component
      ref={ref}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export default EditTextFormItem;
