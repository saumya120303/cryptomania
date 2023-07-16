import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/84264255?s=400&u=4d777db4b559c8f321f38d2dc1f03cb5a7c51ba5&v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"#F7931A"}
      color={"whiteAlpha.700"}
      minH={"10"}
      px={"16"}
      py={["2", "1"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} >About:-</Text>
          <Text
            fontSize={"m"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
            color="black"
            fontWeight="bold"
          >
            This is a crypto project made by Saumya Rani. Click on image to know more.
           
          </Text>
          <Text>
          ALL RIGHTS ARE RESERVED ©
          </Text>
        </VStack>

        <VStack>
        <a href="https://saumya120303.github.io/portfolio/" target="_blank">
          <Avatar boxSize={"20"} mt={["4", "0"]} src={avatarSrc} />
          </a>
          <Text fontWeight="bold">Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
