import { useContext } from "react";
import { ThemeContext } from "./Theme.tsx";

export default function Paragraph() {
  const theme = useContext(ThemeContext);

  console.log(theme);
  return (
    <p className={theme}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit
      molestiae dolor quo animi harum totam? Quasi a doloribus ullam quia
      dolore, minima commodi asperiores? Architecto sit amet eveniet? Deleniti,
      mollitia.
    </p>
  );
}
