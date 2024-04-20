export const getStatusColor = (status) => {
	switch (status) {
		case "On or Close":
			return "#00b200";
		case "Delays":
			return "#ff0000";
		case "No Service":
			return "#979797";
		case "Planned Detour":
			return "#000";
		case "Cancelled":
			return "#FFA500";
		default:
			return "gray.500";
	}
};
