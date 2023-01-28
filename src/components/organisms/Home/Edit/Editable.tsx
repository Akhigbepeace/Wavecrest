import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import { EditableUIConfig } from "config/constants/editable-copy/types";
import { useCopyData } from "contexts/EditableCopyContext";
import { useRouter } from "next/router";
import React, { FormEvent, ReactNode, useEffect, useState } from "react";
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
    let hasNonStrings = false;
    formData.forEach((value, key) => {
      if (typeof value !== "string") hasNonStrings = true;

      data[key] = value as string;
    });

    const finalData = {
      [config.name as any]: data as any,
    } as any;

    if (!hasNonStrings) {
      mutate?.(page, finalData);
    }
    onClose();
  };

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
      />
    </Box>
  );
};

export default Editable;
