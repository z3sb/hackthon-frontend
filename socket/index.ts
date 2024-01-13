import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
const BASEURL = "ws://localhost:3000";

export const socket = io(BASEURL);
