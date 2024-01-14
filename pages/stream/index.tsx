import BioVideo from '@/components/stream/BioVideo';
import ChatBubble from '@/components/stream/ChatBubble';
import React, { useState } from 'react';

// interface IList {
//   value: string;
//   isSender: string;
// }

function index() {
  // const [messagesList, setMessagesList] = useState<IList[]>([]);
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   socket.emit("joinRoom", {
  //     room: "room",
  //   });
  // }, []);

  // function submit() {
  //   socket.emit("message", {
  //     room: "room",
  //     message,
  //   });
  // setMessagesList((prev) => [...prev, message]);
  //   setMessage("");
  // }

  // useEffect(() => {
  //   socket.on("message", (data: string) => {
  //     setMessagesList((prev) => [...prev, { value: data, isSender: false }]);
  //   });
  //   return () => {
  //     socket.off("message");
  //   };
  // }, []);

  return (
    <div className="w-full flex-col px-4">
     <div className="w-full flex">
     <video className="w-3/4" controls>
        <source src="https://www.youtube.com/watch?v=XSo75BY-es4&list=RDXSo75BY-es4&start_radio=1" type="video/mp4" />
      </video>
      <ChatBubble />
     </div>
      <BioVideo/>
    </div>
  );
}

export default index;
