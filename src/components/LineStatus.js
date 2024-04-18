import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

import { ArrowBackIcon } from "@chakra-ui/icons";
import { getStatusColor } from "../utils/functions";
const LineStatus = ({ route, setSelectedRoute }) => {
	const options = {
		month: "2-digit",
		day: "2-digit",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
		timeZone: "America/New_York", // Set to East Coast time zone
	};

	return (
		<Box
			border="1px solid gray"
			borderRadius="12px"
			w={["100%", "100%"]}
			maxH="auto"
			minH={["600px", "450px"]}
		>
			<Flex align="center" gap="18px">
				<Flex p={2}>
					<ArrowBackIcon
						onClick={() => setSelectedRoute(null)}
						w={6}
						h={12}
						_hover={{ cursor: "pointer" }}
					/>
				</Flex>
				<Flex direction="column" align="start">
					<Flex gap="12px" justify="center" align="center">
						<Text fontSize={["18px", "26px"]} fontWeight="bold">
							Active Alerts for
						</Text>
						<Box w="26px" h="26px" bg={route.color} borderRadius="50%" />
					</Flex>
					<Text fontSize={["18px", "26px"]} fontWeight="bold">
						{route.name}
					</Text>
				</Flex>
			</Flex>
			<Flex
				p={4}
				borderTop="1px solid #000"
				borderBottom={`1px solid ${getStatusColor(route.status)}`}
				color={getStatusColor(route.status)}
				fontWeight="bold"
			>
				{route.status}{" "}
			</Flex>

			<Text
				fontSize="16px"
				pl={4}
				mt={4}
				fontWeight="500"
				whiteSpace="pre-line"
			>
				{route.serviceUpdateText}
			</Text>

			<Text
				fontSize="16px"
				mt={2}
				pl={4}
				pr={4}
				color="#d1d1d1
"
			>
				Posted:{" "}
				{new Date(route.updatedAt)
					.toLocaleString("en-US", options)
					.replace(",", "")}
			</Text>
			{route.status === "Planned Detour" && (
				<Text fontSize="16px" pl={4} color="#d1d1d1">
					Expiration:{" "}
					{new Date(route.expiration)
						.toLocaleString("en-US", options)
						.replace(",", "")}
				</Text>
			)}
		</Box>
	);
};

export default LineStatus;
