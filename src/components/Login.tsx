import { Flex, Text, Heading, Input, Button } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useDisconnect } from "wagmi";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";

type MessageContent = {
  name: string;
  id: string;
  message: string;
};

export default function Login(props: { address: string | undefined }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [chatContent, setChatContent] = useState<MessageContent[]>([]);

  const { disconnect } = useDisconnect();

  const userLogin = () => {
    if (userName) {
      setLoggedIn(true);
    } else {
      window.alert("Name required.");
    }
  };

  const leaveChat = () => {
    setLoggedIn(false);
    setUserName("");
    setChatContent([]);
  };

  useEffect((): any => {
    const socket = io(process.env.BASE_URL ?? "", {
      path: "/api/socket",
    });

    socket.on("connect", () => {
      console.log("Socket Connected");
      setSocketConnected(true);
      setUserId(socket.id);
    });

    socket.on("message", (message: MessageContent) => {
      chatContent.push(message);
      setChatContent([...chatContent]);
    });

    if (socket) {
      console.log("Socket Disconnected");
      return () => socket.disconnect();
    }
  }, []);

  return (
    <Flex>
      {!!loggedIn ? (
        <Flex direction={"column"}>
          <ChatHeader
            address={props.address}
            username={userName}
            leave={leaveChat}
          />
          <ChatBox
            username={userName}
            userid={userId}
            chatcontent={chatContent}
          />
        </Flex>
      ) : (
        <Flex
          alignItems={"baseline"}
          direction={"column"}
          margin={"20px"}
          position={"relative"}
        >
          <Flex alignItems={"center"}>
            <CheckCircleIcon color={"green.300"} boxSize={"3"} />
            <Text fontSize={15} color={"green.300"} marginLeft={"5px"}>
              {props.address}
            </Text>
          </Flex>
          <Heading fontSize={40} marginTop={"30px"} marginBottom={"15px"}>
            Enter your name
          </Heading>
          <Input
            placeholder={"Your Name"}
            color={"#322659"}
            _placeholder={{ color: "inherit" }}
            width={"65vh"}
            type={"text"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                userLogin();
              }
            }}
          />
          <Button
            size={"lg"}
            fontSize={"20px"}
            marginTop={"50px"}
            colorScheme={"green"}
            onClick={userLogin}
          >
            Enter Chat
          </Button>
          <Button
            position={"absolute"}
            bottom={"0"}
            colorScheme={"red"}
            size={"md"}
            onClick={() => disconnect()}
          >
            Disconnect
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
