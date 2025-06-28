const ItemValue = ({ todoList }) => {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-4">
      {todoList.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border"
        >
          <h2 className="text-lg font-medium text-gray-800">{item}</h2>
          <button className="ml-auto px-4 py-1 bg-gray-300 rounded hover:bg-gray-400">
            Close
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemValue;
