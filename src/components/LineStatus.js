import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import LineStatusItem from "./LineStatusItem";
const LineStatus = ({ route, setSelectedRoute }) => {
  return (
    <Box
      border="1px solid #2596be"
      borderRadius="5px"
      w={["100%", "100%"]}
      maxH="auto"
      minH={["600px", "450px"]}>
      <Flex
        align="center"
        gap="1.125rem">
        <Flex p={2}>
          <ArrowBackIcon
            onClick={() => setSelectedRoute(null)}
            w={6}
            h={12}
            _hover={{ cursor: "pointer" }}
          />
        </Flex>
        <Flex
          direction="column"
          align="start">
          <Flex
            gap="0.75rem"
            justify="center"
            align="center">
            <Text
              fontSize={["1.125rem", "1.625rem"]}
              fontWeight="bold">
              Active Alerts for
            </Text>
            <Box
              w="1.625rem"
              h="1.625rem"
              bg={route.color}
              borderRadius="50%"
            />
          </Flex>
          <Text
            fontSize={["1.125rem", "1.625rem"]}
            fontWeight="bold">
            {route.name}
          </Text>
        </Flex>
      </Flex>
      {!route.bidirectional &&
        route.serviceUpdates
          .filter((serviceUpdate) => serviceUpdate.routeType === 0)
          .map((serviceUpdate) => (
            <LineStatusItem
              key={serviceUpdate.type + serviceUpdate.id}
              serviceUpdate={serviceUpdate}
              routeType={route.routeType}
            />
          ))}

      {route.bidirectional && (
        <>
          <Box borderTop="1px solid #2397be">
            <Text
              fontSize="18px"
              fontWeight="bold"
              textAlign="center">
              {route.abbreviation} Outbound
            </Text>
            {route.serviceUpdates
              .filter((serviceUpdate) => serviceUpdate.routeType === 2)
              .map((serviceUpdate) => (
                <LineStatusItem
                  key={serviceUpdate.type + serviceUpdate.id}
                  serviceUpdate={serviceUpdate}
                  routeType={route.routeType}
                />
              ))}
          </Box>
          <Box borderTop="1px solid #02397be">
            <Text
              fontSize="18px"
              fontWeight="bold"
              textAlign="center">
              {route.abbreviation} Inbound
            </Text>
            {route.serviceUpdates
              .filter((serviceUpdate) => serviceUpdate.routeType === 1)
              .map((serviceUpdate) => (
                <LineStatusItem
                  key={serviceUpdate.type + serviceUpdate.id}
                  serviceUpdate={serviceUpdate}
                  routeType={route.routeType}
                />
              ))}
          </Box>
        </>
      )}
    </Box>
  );
};

export default LineStatus;
