import { Box, Button, Grid, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
import EditForm, { EditFormField } from "./EditForm";

type EditItemProps = {
  children: ReactNode;
  fields: EditFormField[];
};
const EditItem = (props: EditItemProps) => {
  const router = useRouter();

  const [editable, setEditable] = useState(false);
  // alert(router.pathname);

  useEffect(() => {
    if (router.pathname) {
      setEditable(router.pathname.startsWith("/admin/"));
    }
  }, [router.pathname]);

  const { children, fields } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!editable) return <>{children}</>;
  return (
    <Box
      position="relative"
      border=" 6px gray solid"
      my="2px"
      _hover={{ border: "6px white solid" }}
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
        zIndex={10}
      >
        <Button onClick={onOpen}>Edit</Button>
      </Grid>

      <EditForm fields={fields} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default EditItem;
