import * as RadixPopover from "@radix-ui/react-popover";
import { Position } from "@types";
import { clsx } from "clsx";
import { X } from "phosphor-react";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface TooltipCloseProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  side?: Position;
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string;
  closeTime?: number;
  closeButton?: boolean;
}

const TooltipClose: FC<TooltipCloseProps> = ({
  children,
  className,
  content,
  defaultOpen,
  side,
  closeTime,
  open,
  onOpenChange,
  closeButton = true,
  text,
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(open);

  const handleOpenChange = useCallback((isOpen: boolean) => {
    setTooltipOpen(isOpen);
    if (onOpenChange) onOpenChange(isOpen);

    if (isOpen && closeTime) {
      setTimeout(() => {
        setTooltipOpen(false);
        if (onOpenChange) onOpenChange(false);
      }, closeTime);
    }
  }, []);

  return (
    <RadixPopover.Root
      onOpenChange={handleOpenChange}
      defaultOpen={defaultOpen}
      open={tooltipOpen}
    >
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="flex max-w-xs items-center gap-x-3 rounded-md bg-gray-100 p-3 shadow-sm focus:outline-none"
        >
          <span className={clsx([className, "flex-1 text-sm"])} {...rest}>
            {content || text}
          </span>
          {closeButton && (
            <RadixPopover.Close className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-primary transition-all hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100">
              <X size={16} />
            </RadixPopover.Close>
          )}
          <RadixPopover.Arrow className="h-2 w-5 fill-gray-100" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};

TooltipClose.displayName = "Tooltip.Close";

export default TooltipClose;
