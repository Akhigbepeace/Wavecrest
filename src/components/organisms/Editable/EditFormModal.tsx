import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  ModalHeader,
} from "@chakra-ui/react";
import { EditableUIConfig } from "config/constants/editable-copy/types";
import React, { ChangeEvent, FormEvent } from "react";
import GroupFormControl from "./GroupFormControl";
import SingleItemFormControl from "./SingleItemFormControl";

export type EditUIFormField = {
  label: string;
  name: string;
  placeholder?: string;
  type?: "image" | "text";
};
type EditFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  config: EditableUIConfig<any>;
  defaultValues:
    | Record<string, string | undefined | string[]>
    | Record<string, string | undefined>[];
  uploadingImages: Set<string>;
  uploadedImages: Record<string, string>;
  onGroupItemDelete: (index: number) => void;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EditFormModal(props: EditFormModalProps) {
  const {
    isOpen,
    onClose,
    uploadingImages,
    defaultValues,
    onSubmit,
    uploadedImages,
    config,
    onGroupItemDelete,
    onImageChange,
  } = props;

  const initialRef = React.useRef(null);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{config.title}</ModalHeader>
        <ModalCloseButton />

        {"fields" in config && (
          <SingleItemFormControl
            initialRef={initialRef}
            defaultValues={defaultValues as Record<string, string | string[]>}
            uploadingImages={uploadingImages}
            uploadedImages={uploadedImages}
            onImageChange={onImageChange}
            fields={config.fields}
            onSubmit={onSubmit as any}
            onClose={onClose}
          />
        )}

        {"groupItems" in config && (
          <GroupFormControl
            emptyFormInitial={config.emptyFormInitial}
            items={config.groupItems}
            groupKey={config.groupKey}
            uploadingImages={uploadingImages}
            uploadedImages={uploadedImages}
            onImageChange={onImageChange}
            onGroupItemDelete={onGroupItemDelete}
            onSubmit={onSubmit}
            defaultValues={
              defaultValues as Record<string, string | undefined>[]
            }
          />
        )}
      </ModalContent>
    </Modal>
  );
}
