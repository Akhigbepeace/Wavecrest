type EditableUIField<T> = {
  name: T;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: "image" | "text" | "textarea";
};

export type EditableUIConfig<P = unknown> = {
  name: "showCase" | "statistics" | "footer" | "discoverHospitality";
  defaults?: P;
  fields: EditableUIField<keyof P>[];
  title: string;
};
