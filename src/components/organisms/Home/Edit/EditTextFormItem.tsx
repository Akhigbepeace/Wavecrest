import { Input } from "@chakra-ui/react";
import React from "react";
import { EditableInputProps } from "./types";

const EditTextFormItem = (props: EditableInputProps) => {
  const { defaultValue, placeholder, ref, name } = props;
  return (
    <Input
      ref={ref}
      placeholder={placeholder}
      name={name}
      defaultValue={defaultValue}
    />
  );
};

export default EditTextFormItem;
