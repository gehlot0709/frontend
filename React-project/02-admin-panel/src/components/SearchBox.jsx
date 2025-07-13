const SearchBox = () => {
  return (
    <div className="w-[250px]">
      <form>
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
          <input
            type="text"
            placeholder="Search ..."
            className="bg-transparent focus:outline-none w-full text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBox;