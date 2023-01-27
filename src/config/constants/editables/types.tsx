type EditableField<T> = {
  name: T;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: "image" | "text";
};

export type EditableType<P = unknown> = {
  defaults: P;
  fields: EditableField<keyof P | string>[];
  title: string;
};
