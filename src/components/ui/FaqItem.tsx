"use client";

import Heading from "./Heading";
import Text from "./Text";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

export default function FaqItem({
  question,
  answer,
  isOpen,
  onClick,
}: Props) {
  return (
    <div className="border-b border-[var(--color-border)] py-8">

      <button
        onClick={onClick}
        className="
          w-full
          flex
          items-start
          justify-between
          gap-8
          text-left
          cursor-pointer
        "
      >
        <Heading level={3} className="text-xl">
          {question}
        </Heading>

        <ChevronDown
          className={cn(
            "shrink-0 transition duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300",
          isOpen
            ? "grid-rows-[1fr] mt-5"
            : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <Text>{answer}</Text>
        </div>
      </div>

    </div>
  );
}