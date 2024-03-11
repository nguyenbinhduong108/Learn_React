export default function Hello({
  person,
}: {
  person: {
    name: string;
    emoji: string;
  };
}) {
  return (
    <div>
      <h1>
        Hello {person.name} {person.emoji}
      </h1>
    </div>
  );
}
