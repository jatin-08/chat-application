import { useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Outlet } from "react-router-dom";
import Headers from "./components/Headers/Headers";

function App() {
  // Connect to the WebSocket server
  // const socket = io("http://localhost:4201");

  // Handle connection events if needed

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log("Connected to WebSocket server",socket.id);
  //     socket.on("hello",(s)=>{
  //       console.log(s);

  //     })

  //   });
  //   socket.on("disconnect", () => {
  //     console.log("Disconnected from WebSocket server");
  //   });
  // }, []);

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
