type HighlightProps = {
  text: string;
  query: string;
};

export function Highlight({
  text,
  query,
}: HighlightProps) {
  if (!query) {
    return <>{text}</>;
  }

  const regex = new RegExp(
    `(${query})`,
    "gi"
  );

  const parts =
    text.split(regex);

  return (
    <>
      {parts.map(
        (part, index) =>
          part.toLowerCase() ===
            query.toLowerCase() ? (
            <mark
              key={index}
              className="bg-yellow-300/50 rounded px-0.5"
            >
              {part}
            </mark>
          ) : (
            part
          )
      )}
    </>
  );
}