import React, { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { Image, Box, Button } from "@chakra-ui/react";
import { EditableInputProps } from "./EditableInputProps";

const EditableImage = (props: EditableInputProps) => {
  const { defaultValue } = props;
  const fileRef = useRef<HTMLInputElement>();
  const [src, setSrc] = useState(defaultValue || "/assets/imgs/Showcase1.png");
  const chooseFile = () => {
    fileRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileSrc = e.currentTarget.files?.[0];

    if (fileSrc) {
      const imageSrc = URL.createObjectURL(fileSrc);
      setSrc(imageSrc);
    }
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
      </Box>

      <Image src={src} alt="peace" w="100%" h="150px" objectFit="contain" />

      <input
        ref={fileRef as MutableRefObject<HTMLInputElement>}
        style={{ display: "none" }}
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
    </Box>
  );
};

export default EditableImage;
