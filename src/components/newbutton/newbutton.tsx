import { ReactNode } from "react";
import "./newbutton.scss";

export default function NewButton({
  children,
  type = "primary",
}: {
  children: ReactNode;
  type?: "primary" | "error";
}) {
  function handleType() {
    switch (type) {
      case "primary":
        return "btn-primary";
      case "error":
        return "btn-error";
      default:
        return "btn-primary";
    }
  }

  return <button className={handleType()}>{children}</button>;
}
