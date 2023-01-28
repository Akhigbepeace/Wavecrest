type EditableUIField<T> = {
  name: T;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: "image" | "text";
};

export type EditableUIConfig<P = unknown> = {
  name: "showCase" | "statistics" | "footer";
  defaults?: P;
  fields: EditableUIField<keyof P | string>[];
  title: string;
};
