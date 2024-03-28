import { memo } from "react";

export default memo(function Content({
  onIncrease,
}: {
  onIncrease: () => void;
}) {
  console.log("re-render");

  return (
    <>
      <h1>HELLO</h1>
      <button onClick={onIncrease}>increase</button>
    </>
  );
});
