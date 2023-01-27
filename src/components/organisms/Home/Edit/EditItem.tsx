import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import EditForm, { EditFormField } from "./EditForm";

type EditItemProps = {
  children: ReactNode;
  fields: EditFormField[];
  defaultValues: Record<string, string | string[]>;
  formTitle: string;
};
const EditItem = (props: EditItemProps) => {
  const { children, fields, defaultValues, formTitle } = props;

  const router = useRouter();

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (router.pathname) {
      setEditable(router.pathname.startsWith("/admin/"));
    }
  }, [router.pathname]);

  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <EditForm
        fields={fields}
        isOpen={isOpen}
        onClose={onClose}
        defaultValues={defaultValues}
        formTitle={formTitle}
      />
    </Box>
  );
};

export default EditItem;
