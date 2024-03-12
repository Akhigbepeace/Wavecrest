import { Box, Button, ModalBody } from "@chakra-ui/react";
import { SingleEditableUIConfig } from "config/constants/editable-copy/types";
import React, { ChangeEvent, useState } from "react";
import SingleItemFormControl from "./SingleItemFormControl";

type GroupFormControlProps = {
  items: SingleEditableUIConfig<any>["fields"];
  groupKey: string;
  uploadingImages: Set<string>;
  uploadedImages: Record<string, string>;
  defaultValues: Record<string, string | undefined>[];
  emptyFormInitial: any;
  onGroupItemDelete: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const GroupFormControl = (props: GroupFormControlProps) => {
  const {
    items,
    defaultValues,
    groupKey,
    uploadingImages,
    uploadedImages,
    emptyFormInitial,
    onGroupItemDelete,
    onImageChange,
    onSubmit,
  } = props;
  const [editingIndex, setEditingIndex] = useState<null | number>(null);

  const CREATE_INDEX_VALUE = -1;

  return (
    <Box>
      <ModalBody pb={6}>
        {typeof editingIndex === "number" && (
          <SingleItemFormControl
            listItemIndex={editingIndex}
            defaultValues={defaultValues[editingIndex] || emptyFormInitial}
            uploadingImages={uploadingImages}
            uploadedImages={uploadedImages}
            onImageChange={onImageChange}
            fields={items}
            onSubmit={onSubmit}
            onClose={() => setEditingIndex(null)}
          />
        )}

        {typeof editingIndex !== "number" && (
          <>
            <Box mt="10px" mb="20px">
              <Button
                bg="green"
                _hover={{
                  bg: "green.800",
                }}
                color="white"
                onClick={() => setEditingIndex(CREATE_INDEX_VALUE)}
              >
                Add New
              </Button>
            </Box>

            {defaultValues.map((item, index) => (
              <Box mt="8px" key={index}>
                {item[groupKey]}
                <Box mt="10px">
                  <Button onClick={() => setEditingIndex(index)}>Edit</Button>
                  <Button
                    ml="8px"
                    bg="red"
                    color="white"
                    onClick={() => onGroupItemDelete(index)}
                  >
                    Delete{" "}
                  </Button>
                </Box>
              </Box>
            ))}
          </>
        )}
      </ModalBody>
    </Box>
  );
};

export default GroupFormControl;
