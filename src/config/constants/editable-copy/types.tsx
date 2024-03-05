type SingleUIField<T> = {
  name: T;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: "image" | "text" | "textarea";
};

export type SingleEditableUIConfig<P = unknown> = {
  fields: SingleUIField<P>[];
};

type GroupEditableUIConfig<LItem = any> = {
  groupItems: SingleUIField<keyof LItem>[];
  groupKey: string;
  emptyFormInitial: LItem;
};

export type EditableUIConfig<P = unknown, LItem = any> = (
  | SingleEditableUIConfig<keyof P>
  | GroupEditableUIConfig<LItem>
) & {
  name:
    | "showCase"
    | "statistics"
    | "footer"
    | "discoverHospitality"
    | "banner"
    | "philosophy"
    | "announcements"
    | "ourStory";
  defaults?: P;
  title: string;
};
