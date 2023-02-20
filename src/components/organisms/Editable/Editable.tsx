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
  defaultValues:
    | Record<string, string | undefined | string[]>
    | Record<string, string | undefined>[];
  config: EditableUIConfig<any>;
  page: "home" | "shared" | "contact" | "aboutProfile";
};
const Editable = (props: EditableProps) => {
  const { page, children, defaultValues, config } = props;

  const router = useRouter();

  const [editable, setEditable] = useState(false);

  const [images, setImages] = useState<Record<string, string>>({});
  const [iamgesChanged, setImagesChanged] = useState<string[]>([]);
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
    const arrayIndex = +(e.currentTarget.dataset.index || -1);
    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key] = value;
      } else {
        if (Array.isArray(defaultValues)) {
          data[key] = images[key] || defaultValues[arrayIndex]?.[key];
        } else {
          data[key] = images[key] || defaultValues[key];
        }
      }
    });

    let newDataValues = data as any;
    if (Array.isArray(defaultValues)) {
      newDataValues = [...defaultValues];

      if (arrayIndex === -1) {
        //add new was clicked
        newDataValues.push(data);
      } else {
        newDataValues[arrayIndex] = data;
      }
    }

    const finalData = {
      [config.name as any]: newDataValues,
    } as any;

    mutate?.(page, finalData, iamgesChanged);

    setImagesChanged([]);
    setImages({});
  };

  const handleGroupItemDelete = (itemIndex: number) => {
    if (!Array.isArray(defaultValues)) return;
    const newValues = defaultValues.filter((val, index) => index !== itemIndex);

    const finalData = {
      [config.name as any]: newValues,
    } as any;

    mutate?.(page, finalData);
  };

  const handleImageChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const imgFile = e.currentTarget.files?.[0];
      const name = e.currentTarget.name;

      if (imgFile) {
        const newUploadingImages = [...uploadingImages, name];
        setUploadingImages(newUploadingImages);

        const namesSplit = imgFile.name.split(".");
        const extension = namesSplit[namesSplit.length - 1];
        const filename = `${page}-${name}`;
        const response = await fetch(
          `/api/upload-image-url?filename=${filename}&extension=${extension}`
        );

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
        setImagesChanged((iamgesChanged) => [...iamgesChanged, filename]);
        const targetName = e.target.name;
        setImages((images) => ({
          ...images,
          [targetName]: imageURL,
        }));
      }
    },
    [page, uploadingImages]
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
        config={config}
        isOpen={isOpen}
        onClose={onClose}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onGroupItemDelete={handleGroupItemDelete}
        uploadingImages={new Set(uploadingImages)}
        uploadedImages={images}
        onImageChange={handleImageChange}
      />
    </Box>
  );
};

export default Editable;
