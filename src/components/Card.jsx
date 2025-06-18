import { useState } from "react";

function Card({ name, price, imageUrl }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="m-auto max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-base text-gray-600">{price}</p>
        <button
          onClick={() => setLikes((prev) => prev + 1)}
          className="mt-2 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          좋아요 {likes}
        </button>
      </div>
    </div>
  );
}

export default Card;
