import { socket } from "@/socket";
import React, { useEffect, useState } from "react";

interface IList {
  value: string;
  isSender: string;
}

function index() {
  const [messagesList, setMessagesList] = useState<IList[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", {
      room: "room",
    });
  }, []);

  function submit() {
    socket.emit("message", {
      room: "room",
      message,
    });
    // setMessagesList((prev) => [...prev, message]);
    setMessage("");
  }

  useEffect(() => {
    socket.on("message", (data: string) => {
      setMessagesList((prev) => [...prev, { value: data, isSender: false }]);
    });
    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div className="w-full flex">
      <div className="max-w-[50%] flex-1">
        <video controls src={"/video.mp4"} className="w-1/2 h-full"></video>
      </div>
      <div className="flex-1 bg-red-50 flex flex-col py-4">
        <div className="flex-1 p-8 flex flex-col gap-4 h-full overflow-y-scroll">
          {messagesList.map((msg) => (
            <div className={`bg-white shadow-md w-1/2 p-2 rounded-md`}>
              {msg.value}
            </div>
          ))}
        </div>
        <div className="p-4 flex items-center gap-4">
          <div className="flex-1 p-2 rounded-md shadow-md bg-white">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <button
            onClick={submit}
            className="p-2 bg-blue-500 text-white rounded-md"
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
