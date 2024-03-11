export default function Conditional() {
  const display = false;

  if (display) {
    return (
      <div>
        <h1>Message1</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Message2</h1>
      </div>
    );
  }

  //   return display ? <h1>Message1</h1> : <h1>Message2</h1>;
}
