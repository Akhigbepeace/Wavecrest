import React, { ChangeEvent, FormEvent, useCallback } from "react";
import {
  Button,
  ModalBody,
  FormControl,
  ModalFooter,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import EditUIFormItem from "./EditUIFormItem";
import { SingleEditableUIConfig } from "config/constants/editable-copy/types";

type SingleItemFormControlProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  listItemIndex?: number;
  fields: SingleEditableUIConfig<any>["fields"];
  initialRef?: any;
  uploadingImages: Set<string>;
  uploadedImages: Record<string, string>;
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  defaultValues: Record<string, undefined | string | string[]>;
};

const SingleItemFormControl = (props: SingleItemFormControlProps) => {
  const {
    initialRef,
    fields,
    uploadingImages,
    uploadedImages,
    onImageChange,
    onSubmit,
    onClose,
    listItemIndex,
    defaultValues,
  } = props;

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      onSubmit(e);
      onClose();
    },
    [onClose, onSubmit]
  );

  return (
    <FormControl
      as="form"
      data-index={listItemIndex}
      onSubmit={handleSubmit as any}
    >
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
        <Button onClick={props.onClose}>Cancel</Button>
      </ModalFooter>
    </FormControl>
  );
};

export default SingleItemFormControl;
