import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
  Box,
} from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent } from "react";
import EditUIFormItem from "./EditUIFormItem";

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
  fields: EditUIFormField[];
  defaultValues: Record<string, string | string[]>;
  formTitle: string;
  uploadingImages: Set<string>;
  uploadedImages: Record<string, string>;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function EditFormModal(props: EditFormModalProps) {
  const {
    formTitle,
    isOpen,
    onClose,
    fields,
    uploadingImages,
    defaultValues,
    onSubmit,
    uploadedImages,
    onImageChange,
  } = props;

  const initialRef = React.useRef(null);

  return (
    <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{formTitle}</ModalHeader>
        <ModalCloseButton />
        <FormControl as="form" onSubmit={onSubmit as any}>
          <ModalBody pb={6}>
            {fields.map((field, index) => (
              <Box key={field.name} mt={index > 0 ? 8 : 0}>
                <FormLabel>{field.label}</FormLabel>
                <EditUIFormItem
                  ref={initialRef}
                  placeholder={field.placeholder}
                  defaultValue={
                    (uploadedImages[field.name] ||
                      defaultValues[field.name]) as string
                  }
                  type={field.type}
                  name={field.name}
                  loading={uploadingImages.has(field.name)}
                  onImageChange={onImageChange}
                />
              </Box>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </FormControl>
      </ModalContent>
    </Modal>
  );
}