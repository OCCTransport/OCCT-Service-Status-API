import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Route from "./Route"; // Adjust the import path accordingly

const ServiceStatus = ({ routes, setSelectedRoute }) => {
	return (
		<Box
			border="1px solid gray"
			borderRadius="12px"
			w={["100%", "100%"]}
			maxH="auto"
			minH="450px"
		>
			<Flex direction="column" borderBottom="1px solid #000">
				<Text fontSize="26px" fontWeight="bold" p={2}>
					Service Status
				</Text>
			</Flex>
			<Box p={4}>
				{routes.map((route) => (
					<Route
						key={route.name + route.id}
						setSelectedRoute={setSelectedRoute}
						route={route}
					/>
				))}
			</Box>
		</Box>
	);
};

export default ServiceStatus;
