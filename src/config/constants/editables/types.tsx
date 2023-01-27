type EditableField<T> = {
  name: T;
  label: string;
  placeholder: string;
  defaultValue?: string;
};

export type EditableType<P = unknown> = {
  defaults: P;
  fields: EditableField<keyof P | string>[];
  title: string;
};
