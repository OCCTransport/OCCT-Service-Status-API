import React, { useEffect, useState } from "react";
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import { getStatusColor } from "../utils/functions";
const Route = ({ route, setSelectedRoute }) => {
  const [hasNestedUpdate, setHasNestedUpdate] = useState(
    route.bidirectional &&
      route.serviceUpdates.findIndex((update) =>
        ["Delays", "Planned Detour"].includes(update.type)
      ) !== -1
  );
  console.log(hasNestedUpdate);
  return (
    <Flex
      align="center"
      mb={2}>
      <Box
        position="relative"
        w="1.875rem"
        h="1.875rem"
        bg={route.color}
        borderRadius="50%"
        mr={6}
        aspectRatio={1}>
        <Text
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="white"
          fontWeight="bold"
          fontSize="12px">
          {route.abbreviation}
        </Text>
      </Box>
      <Text
        fontSize="1rem"
        fontWeight="bold"
        mr="auto">
        {route.name}
      </Text>
      <Button
        backgroundColor="#fff"
        _hover={{ backgroundColor: "#fff" }}
        onClick={
          route.status === "Delays" ||
          route.status === "Planned Detour" ||
          hasNestedUpdate
            ? () => setSelectedRoute(route)
            : null
        }
        textDecoration={
          route.status === "Delays" ||
          route.status === "Planned Detour" ||
          hasNestedUpdate
            ? "underline " + getStatusColor(route.status)
            : null
        }
        color={getStatusColor(route.status)}>
        {route.status}
      </Button>
    </Flex>
  );
};

export default Route;
