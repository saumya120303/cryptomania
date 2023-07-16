import { HStack, Button, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p="4" shadow="base" bgColor="#F7931A">
      <Button variant="unstyled" color="white" marginLeft="30" marginRight="620">
        <Link to="/">Home</Link>
      </Button>
      <Button variant="unstyled" color="white" marginLeft="30" marginRight="620">
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant="unstyled" color="white" marginLeft="30" marginRight="500">
        <Link to="/coins">Coins</Link>
      </Button>
      <Spacer />
    </HStack>
  );
};


export default Header;
