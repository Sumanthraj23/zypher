import type { NextApiRequest } from "next";
import type { NextApiResponseServerIO } from "../../types/next";

export default function ChatHandler(
  req: NextApiRequest,
  res: NextApiResponseServerIO
) {
  if (req.method === "POST") {
    const message = req.body;
    res?.socket?.server?.io?.emit("message", message);
    res.status(201).json(message);
  }
}
