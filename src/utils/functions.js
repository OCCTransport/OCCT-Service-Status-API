export const getStatusColor = (status) => {
  switch (status) {
    case "On or Close":
      return "#00b200";
    case "Delays":
      return "#FFA500";
    case "Cancelled":
      return "#ff0000";
    case "No Service":
      return "#979797";
    case "Planned Detour":
      return "#000";
    default:
      return "gray.500";
  }
};
