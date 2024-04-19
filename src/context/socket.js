import { io } from "socket.io-client";

import React from "react";

export const socket = io(
  process.env.REACT_APP_URL
    ? process.env.REACT_APP_URL
    : "https://portal.occtransport.org"
);
socket.on("connect", () => {});
export const SocketContext = React.createContext();
