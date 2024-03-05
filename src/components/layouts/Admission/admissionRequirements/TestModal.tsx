import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        fontFamily="Manrope"
        fontWeight="700"
        fontSize="22px"
        textDecoration="underline"
        mt="33px"
        lineHeight="33px"
        onClick={onOpen}
        cursor="pointer"
      >
        Click to view Subject Combination
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            Hello
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
