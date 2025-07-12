import React from "react";
import clsx from "clsx";

type Props = {
  message: string;
  isUser?: boolean;
};

export default function ChatBubble({ message, isUser = false }: Props) {
  return (
    <div className={clsx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={clsx(
          "max-w-xs md:max-w-md p-3 rounded-2xl m-2 text-white",
          isUser ? "bg-blue-600" : "bg-gray-700"
        )}
      >
        {message}
      </div>
    </div>
  );
}
