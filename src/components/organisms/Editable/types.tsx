import { ChangeEvent, RefObject } from "react";

export type EditableInputProps = {
  defaultValue?: string;
  placeholder?: string;
  ref?: RefObject<any>;
  name: string;
  loading?: boolean;
  onImageChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
