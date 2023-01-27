import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  ModalFooter,
} from "@chakra-ui/react";
import React from "react";
import {} from "react-bootstrap";

export type EditFormField = {
  label: string;
  name: string;
  placeholder?: string;
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
              <FormControl key={field.name} mt={index > 0 ? 4 : 0}>
                <FormLabel>{field.label}</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder={field.placeholder}
                  defaultValue={defaultValues[field.name]}
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
