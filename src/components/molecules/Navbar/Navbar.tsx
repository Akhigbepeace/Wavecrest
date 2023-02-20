import { useMemo, useRef, useState } from "react";
import { Box, Flex, Link, useBoolean, useOutsideClick } from "@chakra-ui/react";
import { navLinks, sideLinks } from "./constants";
import NextLink from "next/link";
import SideLink from "./SideLink";

type NavbarProps = {
  hrefPrefix?: string;
};
const Navbar = (props: NavbarProps) => {
  const prefix = props.hrefPrefix || "";
  const ref = useRef<any>();

  useOutsideClick({
    ref,
    handler: () => setShowNestedLinks.off(),
  });

  const [showNestedLinks, setShowNestedLinks] = useBoolean();
  const [currentLink, setCurrentLink] = useState(0);

  const links = useMemo(() => {
    if (prefix !== "/admin") return navLinks;
    return [
      {
        name: "HOME",
        to: "/home",
        NestedLinks: [],
      },
      ...navLinks,
    ];
  }, [prefix]);

  return (
    <Box
      px="91px"
      pt="34px"
      justifyContent="space-between"
      h="91px"
      w="100%"
      bg="#021D37"
      alignItems="center"
      position="sticky"
      top="0"
      zIndex="4"
      display={{
        sm: "none",
        md: "none",
        lg: "none",
        xl: "flex",
        "2xl": "flex",
      }}
    >
      <Flex alignItems="center">
        {links.map((navLink, index) => {
          return (
            <Flex
              key={index}
              ref={ref}
              alignItems="center"
              pb="25px"
              mr="25px"
              onMouseLeave={() => setShowNestedLinks.off()}
              borderBottom="6px solid transparent"
              position="relative"
              borderColor={
                currentLink === index && showNestedLinks
                  ? "#fff"
                  : "transparent"
              }
            >
              <NextLink href={prefix + navLink.to} passHref legacyBehavior>
                <Link
                  onMouseEnter={() => {
                    setCurrentLink(index);
                    setShowNestedLinks.on();
                  }}
                  color="#fff"
                  fontSize="16px"
                  textAlign="center"
                  transition="all ease 0.5s"
                  _hover={{
                    color: "brown",
                    textDecoration: "none",
                  }}
                >
                  {navLink.name}
                </Link>
              </NextLink>

              <Box
                color="#fff"
                w="max-content"
                position="absolute"
                onMouseLeave={() => setShowNestedLinks.off()}
                bg="#021d37"
                zIndex="3"
                top="55px"
                display={
                  currentLink === index && showNestedLinks ? "block" : "none"
                }
              >
                {navLink.NestedLinks.map((nestedLink, index) => {
                  return (
                    <NextLink
                      key={index}
                      href={prefix + nestedLink.to}
                      passHref
                      legacyBehavior
                    >
                      <Link
                        display="block"
                        fontWeight="100"
                        key={index}
                        p="4px 20px"
                        borderBottom={
                          navLink.NestedLinks.length - 1 === index
                            ? "none"
                            : "1px solid white"
                        }
                        transition="all ease 0.5s"
                        zIndex="2"
                        _hover={{
                          textDecoration: "none",
                          color: "brown",
                        }}
                      >
                        {nestedLink.name}
                      </Link>
                    </NextLink>
                  );
                })}
              </Box>
            </Flex>
          );
        })}
      </Flex>

      <Flex pb="29px">
        {sideLinks.map((sideLink, index) => (
          <Box key={index} display="inline-block" w="133px" ml="27px">
            <SideLink variant={sideLink.variant} href={sideLink.href}>
              {sideLink.name}
            </SideLink>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
