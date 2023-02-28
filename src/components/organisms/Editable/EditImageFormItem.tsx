import React, { MutableRefObject, useRef } from "react";
import { Image, Box, Button, Spinner } from "@chakra-ui/react";
import { EditableInputProps } from "./types";

const  EditImageFormItem = (props: EditableInputProps) => {
  const { defaultValue: src, name, onImageChange, loading } = props;
  const fileRef = useRef<HTMLInputElement>();
  const chooseFile = () => {
    fileRef.current?.click();
  };

  return (
    <Box position="relative" w="100%" h="150px">
      <Box
        position="absolute"
        w="100%"
        h="150px"
        display="grid"
        placeItems="center"
        bg="#0000002a"
      >
        {!loading && (
          <Button
            bg="#00000022"
            border="white 2px solid"
            color="white"
            onClick={chooseFile}
            _hover={{
              bg: "#00000022",
              border: "white 2px solid",
              color: "white",
            }}
          >
            change
          </Button>
        )}

        {loading && <Spinner color="white" size="lg" />}
      </Box>

      <Image src={src} alt="peace" w="100%" h="150px" objectFit="contain" />

      <input
        ref={fileRef as MutableRefObject<HTMLInputElement>}
        style={{ display: "none" }}
        type="file"
        name={name}
        onChange={onImageChange}
        accept="image/*"
      />
    </Box>
  );
};

export default EditImageFormItem;
