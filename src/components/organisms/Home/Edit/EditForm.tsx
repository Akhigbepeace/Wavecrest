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
} from "@chakra-ui/react";
import React from "react";
import Editable from "./Editable";

export type EditFormField = {
  label: string;
  name: string;
  placeholder?: string;
  type?: "image" | "text";
};
type EditFormProps = {
  isOpen: boolean;
  onClose: () => void;
  fields: EditFormField[];
  defaultValues: Record<string, string | string[]>;
  formTitle: string;
};

export default function EditForm(props: EditFormProps) {
  const { formTitle, isOpen, onClose, fields, defaultValues } = props;

  const initialRef = React.useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{formTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {fields.map((field, index) => (
              <FormControl key={field.name} mt={index > 0 ? 8 : 0}>
                <FormLabel>{field.label}</FormLabel>
                <Editable
                  ref={initialRef}
                  placeholder={field.placeholder}
                  defaultValue={defaultValues[field.name] as string}
                  type={field.type}
                />
              </FormControl>
            ))}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
