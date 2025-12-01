"use client";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useEffect } from "react";
import { toast } from "sonner";

interface CopyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textToCopy: string;
}
export const CopyButton = ({
  textToCopy,
  className,
  ...props
}: CopyButtonProps) => {
  const { copied, handleCopy } = useCopyToClipboard();

  useEffect(() => {
    if (copied) {
      toast.success("Текст скопирован!");
    }
  }, [copied]);

  return (
    <button
      onClick={() => handleCopy(textToCopy)}
      className={cn("hover:text-brand-components transition-colors", className)}
      {...props}
    >
      {copied ? (
        <Check className="size-5 text-green-500" />
      ) : (
        <Copy className="size-5" />
      )}
    </button>
  );
};
