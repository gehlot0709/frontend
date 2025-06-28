const TodoInput = ({ itemValue, setItemValue, handleAdd }) => {
  const onChangevalue = (e) => {
    setItemValue(e.target.value);
  };

  return (
    <form onSubmit={handleAdd} className="max-w-md mx-auto mt-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={itemValue}
          placeholder="Enter something..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={onChangevalue}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
