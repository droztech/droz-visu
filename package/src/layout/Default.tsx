import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ArrowClockwise, Moon, Sun, Terminal } from "phosphor-react";
import { FC, HTMLAttributes, ReactNode, useState } from "react";

export interface LayoutDefaultProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  terminal?: unknown[];
  buttons?: {
    icon: ReactNode;
    onClick: (data?: unknown) => void;
  }[];
}

const LayoutDefault: FC<LayoutDefaultProps> = ({
  asChild,
  terminal,
  children,
  className,
  buttons,
  ...rest
}) => {
  const Comp = asChild ? Slot : "div";
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("visuDevTheme") as "light" | "dark") ?? "light",
  );

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("visuDevTheme", newTheme);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const layoutButtons = [
    { icon: theme === "dark" ? <Sun /> : <Moon />, onClick: toggleTheme },
    { icon: <ArrowClockwise />, onClick: refreshPage },
  ];

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-[#272727]">
      <div className="flex w-[90vw] min-w-[320px] max-w-5xl flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-wrap-reverse items-center justify-between gap-4 text-gray max-sm:justify-center">
          <div className="flex items-center gap-4 max-md:gap-2">
            {buttons?.map((item, index) => (
              <button
                key={index}
                className="rounded bg-gray-800 p-2 transition-colors hover:bg-gray-700"
                onClick={item.onClick}
              >
                {item.icon}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 max-md:gap-2">
            {layoutButtons?.map((item, index) => (
              <button
                key={index}
                className="rounded bg-gray-800 p-2 transition-colors hover:bg-gray-700"
                onClick={item.onClick}
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
        <Comp
          className={clsx(
            "relative flex min-h-[50vh] w-screen max-w-5xl flex-col items-center justify-center gap-4 overflow-auto rounded p-4 shadow-sm",
            className,
            theme === "light"
              ? "bg-gray-100 text-gray-900"
              : "dark bg-gray-800 text-gray-100",
          )}
          {...rest}
        >
          {children}
        </Comp>
        {terminal && (
          <div className="flex w-full flex-col gap-2">
            {terminal.map((item, index) => (
              <pre
                key={index}
                className="relative min-h-12 w-full rounded bg-gray-800 p-4 text-xs text-gray"
              >
                {JSON.stringify(item, null, 2)}
                <button
                  className="absolute right-2 top-2 rounded border border-gray-700 bg-gray-800 p-2 transition-colors hover:bg-gray-700"
                  onClick={() => console.log(item)}
                >
                  <Terminal size={12} />
                </button>
              </pre>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LayoutDefault;
