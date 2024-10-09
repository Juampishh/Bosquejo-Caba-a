interface ButtonListGeneticProps {
  onSelect: (id: string | null) => void;
}

export function ButtonListGenetic({ onSelect }: ButtonListGeneticProps) {
  return (
    <div className="flex items-center justify-center gap-9">
      <button
        onClick={() => onSelect("Angus")}
        className="px-4 py-2 text-black transition-all duration-75 border rounded-full w-28 border-darkRed hover:bg-gray-100 hover:scale-105"
      >
        Raza 1
      </button>
      <button
        onClick={() => onSelect("Hereford")}
        className="px-4 py-2 text-black transition-all duration-75 border rounded-full w-28 border-darkRed hover:bg-gray1000 hover:scale-105"
      >
        Raza 2
      </button>
      <button
        onClick={() => onSelect("Charolais")}
        className="px-4 py-2 text-black transition-all duration-75 border rounded-full w-28 border-darkRed hover:bg-gray1000 hover:scale-105"
      >
        Raza 3
      </button>
      <button
        onClick={() => onSelect(null)}
        className="px-4 py-2 text-black transition-all duration-75 border rounded-full w-28 border-darkRed hover:bg-gray1000 hover:scale-105"
      >
        Todos
      </button>
    </div>
  );
}
