export default function ColorPicker({ background, setBackground }) {
  const colors = ["bg-blue-300", "bg-red-300", "bg-green-300", "bg-yellow-300"];

  return (
    <div className="flex items-center mt-5 space-x-2 p-4 rounded w-max">
      <span className="text-3xl">Background:</span>
      {colors.map((c) => (
        <div
          key={c}
          className={`w-6 h-6 border rounded cursor-pointer ${c}`}
          onClick={() => setBackground(c)}
        ></div>
      ))}
    </div>
  );
}
