import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import { EditableUIConfig } from "config/constants/editable-copy/types";
import { useCopyData } from "contexts/EditableCopyContext";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import EditFormModal from "./EditFormModal";

type EditableProps = {
  children: ReactNode;
  defaultValues: Record<string, string | string[]>;
  config: EditableUIConfig<any>;
  page: "home" | "shared";
};
const Editable = (props: EditableProps) => {
  const { page, children, defaultValues, config } = props;

  const router = useRouter();

  const [editable, setEditable] = useState(false);

  const [images, setImages] = useState<Record<string, string>>({});
  const [uploadingImages, setUploadingImages] = useState<string[]>([]);
  useEffect(() => {
    if (router.pathname) {
      setEditable(router.pathname.startsWith("/admin/"));
    }
  }, [router.pathname]);

  const { mutate } = useCopyData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: any = {};
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key] = value;
      } else {
        data[key] = images[key] || defaultValues[key];
      }
    });

    const finalData = {
      [config.name as any]: data as any,
    } as any;

    mutate?.(page, finalData);

    onClose();
  };

  const handleImageChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const imgFile = e.currentTarget.files?.[0];
      const name = e.currentTarget.name;

      if (imgFile) {
        const newUploadingImages = [...uploadingImages, name];
        setUploadingImages(newUploadingImages);

        const response = await fetch(`/api/upload-image-url?filename=${name}`);
        const { url } = await response.json();

        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: imgFile,
        });

        const imageURL = url.split("?")[0];
        const uniqueImages = new Set(newUploadingImages);
        uniqueImages.delete(name);
        setUploadingImages(Array.from(uniqueImages));

        setImages({
          ...images,
          [e.target.name]: imageURL,
        });
      }
    },
    [images, uploadingImages]
  );

  if (!editable) return <>{children}</>;
  return (
    <Box
      position="relative"
      border=" 3px gray solid"
      my="1px"
      _hover={{ border: "3px white solid" }}
    >
      <Box>{children}</Box>
      <Grid
        left={0}
        top={0}
        placeItems="center"
        position="absolute"
        w="100%"
        h="100%"
        bg="blackAlpha.400"
        zIndex={2}
      >
        <Button onClick={onOpen}>Edit</Button>
      </Grid>

      <EditFormModal
        fields={config.fields as any}
        isOpen={isOpen}
        onClose={onClose}
        defaultValues={defaultValues}
        formTitle={config.title}
        onSubmit={handleSubmit}
        uploadingImages={new Set(uploadingImages)}
        uploadedImages={images}
        onImageChange={handleImageChange}
      />
    </Box>
  );
};

export default Editable;
