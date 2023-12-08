import { Flex } from "@chakra-ui/react";
import ChatHome from "../components/ChatHome";

export default function Home() {
  return (
    <Flex bg={"blue"} height={"100vh"}>
      <ChatHome />
    </Flex>
  );
}
