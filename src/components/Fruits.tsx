export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Mango", "Pineapple", "Orange"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 20, emoji: "🍌" },
    { name: "Mango", price: 30, emoji: "🥭" },
    { name: "Pineapple", price: 50, emoji: "🍍" },
    { name: "Orange", price: 70, emoji: "🍊" },
  ];

  const click = (fruit: string) => {
    console.log(fruit);
  };

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.name} onClick={() => click(fruit.name)}>
          {fruit.emoji} {fruit.name}: ${fruit.price}
        </li>
      ))}
    </ul>
  );
}
