"use client";
import React, { useState, useCallback } from "react";
type CloseableProps = {
  onSuccess?: () => void;
  onClose?: () => void;
};
type PopupChildren = React.ReactNode | ((close: () => void) => React.ReactNode);
export const usePopupLogic = (children: PopupChildren) => {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const renderChildren = useCallback(() => {
    if (typeof children === "function") {
      return children(close);
    }

    if (React.isValidElement<CloseableProps>(children)) {
      return React.cloneElement(children, {
        onSuccess: close,
        onClose: close,
      });
    }

    return children;
  }, [children, close]);

  return { open, setOpen, close, renderChildren };
};
