"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";

export const useCopyToClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (text: string) => {
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
      } catch (error) {
        console.error("Failed to copy text: ", error);
        toast.error("Не удалось скопировать текст.");
        setCopied(false);
      }
    },
    [timeout]
  );

  return { copied, handleCopy };
};
