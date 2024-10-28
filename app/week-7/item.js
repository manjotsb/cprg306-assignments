export default function Item({ name, quantity, category }) {
    return (
      <li className="p-4 m-4 bg-blue-950 max-w-80">
        <p className="font-bold text-xl">{name}</p>
        <p>Buy {quantity} in {category}</p>
      </li>
    );
  }