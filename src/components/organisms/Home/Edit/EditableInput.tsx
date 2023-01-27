import { Input } from "@chakra-ui/react";
import React from "react";
import { EditableInputProps } from "./EditableInputProps";

const EditableInput = (props: EditableInputProps) => {
  const { defaultValue, placeholder, ref } = props;
  return (
    <Input
      ref={ref}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default EditableInput;
