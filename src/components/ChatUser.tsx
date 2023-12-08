import { Avatar, Flex, Text } from "@chakra-ui/react";

export default function ChatUser(props: { username: string }) {
  return (
    <Flex
      margin={"5px"}
      gap={"2"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Avatar name={props.username} size={"sm"} />
      <Text color={"black"}>{props.username}</Text>
    </Flex>
  );
}
